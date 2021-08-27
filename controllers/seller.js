const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Seller = require('../models/Seller')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const seller = new Seller({
          email: req.body.email,
          password: hash
        });
        seller.save()
          .then(() => res.status(201).json({ message: 'Seller created' }))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Seller.findOne({ email: req.body.email })
      .then(seller => {
        if (!seller) {
          return res.status(401).json({ error: 'Seller not find' });
        }
        bcrypt.compare(req.body.password, seller.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Seller wrong password' });
            }
            res.status(200).json({
              sellerId: seller._id,
              token: jwt.sign(
                { sellerId: seller._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };