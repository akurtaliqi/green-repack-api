const SellOffer = require('../models/SellOffer');

exports.createSellOffer = (req, res, next) => {
  const sellOffer = new SellOffer({
    price: req.body.sellOfferPrice,
    // discount: req.body.description,
    sellOfferAccept: false,
    productId: req.body.productId,
    sellerId: req.body.sellerId,
    // couponPath: "",
    couponDownloaded: false,
    createDate: Date.now(),
  });
  sellOffer.save().then(
    (sellOfferId) => {
        res.status(201).json(sellOffer._id);
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
  console.log("là")
  console.log(req.params.sellerId)
  console.log(req.sellerId)
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
    price: req.body.price,
    sellOfferAccept: req.body.sellOfferAccept,
    productId: req.body.productId,
    sellerId: req.body.sellerId,
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


exports.getAllSellOffersBySellerId = (req, res, next) => {

  console.log(req.params)
  console.log(req.params.id)
  SellOffer.find({
    sellerId : req.params.id,
  }).then(
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

exports.getSellOfferByIdProduct = (req, res, next) => {
  SellOffer.findOne({
    productId: req.params.productId,
    sellOfferAccept: true
  }).then(
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