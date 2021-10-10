const Wallet = require('../models/Wallet');

exports.createWallet = (req, res, next) => {
  const wallet = new Wallet({
    buyerId: req.body.buyerId,
    amount: req.body.amount,
    // associationId: null,
    // projectId: null,
  });
  wallet.save().then(
    () => {
      res.status(201).json({
        message: 'wallet created'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneWallet = (req, res, next) => {
  Wallet.findOne({
    _id: req.params.id
  }).then(
    (wallet) => {
      res.status(200).json(wallet);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyWallet = (req, res, next) => {
  const wallet = new Wallet({
    _id: req.params.id,
    amount: req.body.amount,
    // associationId: req.body.addressNumber,
    // projectId: req.body.projectId,
    // TO DO amount minus the amount required for the chosen project
  });
  Wallet.updateOne({_id: req.params.id}, wallet).then(
    () => {
      res.status(201).json({
        message: 'wallet updated'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteWallet = (req, res, next) => {
  Wallet.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'wallet deleted'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllWallets = (req, res, next) => {
    Wallet.find().then(
    (wallets) => {
      res.status(200).json(wallets);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};