const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Association = require("../models/Association");
require('dotenv').config()

exports.signup = (req, res) => {
  console.log("req.body====>", req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const association = new Association({
        email: req.body.email,
        password: hash,
        name: req.body.name,
      });
      association
        .save()
        .then(() => res.status(201).json({ message: "Association created" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res) => {
  Association.findOne({ email: req.body.email })
    .then((association) => {
      if (!association) {
        return res.status(401).json({ error: "association not find" });
      }
      bcrypt
        .compare(req.body.password, association.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "association wrong password" });
          }
          res.status(200).json({
            associationid: association._id,
            token: jwt.sign({ userId: association._id }, process.env.JWT_SECRET_TOKEN, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneAssociation = (req, res) => {
  Association.findOne(
    {
      _id: req.params.id,
    },
    { password: 0 }
  )
    .then((association) => {
      res.status(200).json(association);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
