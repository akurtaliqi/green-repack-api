const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Buyer = require('../models/Buyer')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const buyer = new Buyer({
          email: req.body.email,
          password: hash
        });
        buyer.save()
          .then(() => res.status(201).json({ message: 'Buyer created' }))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Buyer.findOne({ email: req.body.email })
      .then(buyer => {
        if (!buyer) {
          return res.status(401).json({ error: 'Buyer not find' });
        }
        bcrypt.compare(req.body.password, buyer.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Buyer wrong password' });
            }
            res.status(200).json({
              buyerId: buyer._id,
              token: jwt.sign(
                { buyerId: buyer._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.getOneBuyer = (req, res, next) => {
    Buyer.findOne({
      _id: req.params.id
    }).then(
      (buyer) => {
        res.status(200).json(buyer);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };