const SellOffer = require('../models/sellOffer');

exports.createSellOffer = (req, res, next) => {
  const sellOffer = new SellOffer({
    name: req.body.name,
    description: req.body.description,
  });
  sellOffer.save().then(
    () => {
      res.status(201).json({
        message: 'Sell offer created'
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

exports.getOneSellOffer = (req, res, next) => {
    SellOffer.findOne({
    _id: req.params.id
  }).then(
    (sellOffer) => {
      res.status(200).json(sellOffer);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySellOffer = (req, res, next) => {
  const sellOffer = new SellOffer({
    _id: req.params.id,
    addressNumber: req.body.addressNumber,
    addressRoad: req.body.addressRoad,
    addressPostalCode: req.body.addressPostalCode,
    addressCity: req.body.addressCity,
    country: req.body.country,
  });
  SellOffer.updateOne({_id: req.params.id}, sellOffer).then(
    () => {
      res.status(201).json({
        message: 'Sell offer updated'
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

exports.deleteSellOffer = (req, res, next) => {
    SellOffer.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Sell offer deleted'
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

exports.getAllSellOffers = (req, res, next) => {
    SellOffer.find().then(
    (sellOffers) => {
      res.status(200).json(sellOffers);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};