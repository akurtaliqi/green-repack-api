const GreenCoin = require('../models/GreenCoin');

exports.createGreenCoin = (req, res, next) => {
  const greenCoin = new GreenCoin({
    buyerId: req.body.buyerId,
    associationId: null,
    projectId: null,
    amount: req.body.amount,
  });
  greenCoin.save().then(
    () => {
      res.status(201).json({
        message: 'green coin created'
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

exports.getOneGreenCoin = (req, res, next) => {
  GreenCoin.findOne({
    _id: req.params.id
  }).then(
    (greenCoin) => {
      res.status(200).json(greenCoin);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyGreenCoin = (req, res, next) => {
  const greenCoin = new GreenCoin({
    _id: req.params.id,
    associationId: req.body.addressNumber,
    projectId: req.body.projectId,
    // TO DO amount minus the amount required for the chosen project
  });
  GreenCoin.updateOne({_id: req.params.id}, greenCoin).then(
    () => {
      res.status(201).json({
        message: 'green coin updated'
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

exports.deleteGreenCoin = (req, res, next) => {
    GreenCoin.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Green Coin deleted'
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

exports.getAllGreenCoins = (req, res, next) => {
    GreenCoin.find().then(
    (greencoins) => {
      res.status(200).json(greencoins);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};