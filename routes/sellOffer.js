const express = require('express');
const router = express.Router();
const auth = require("../config/auth");

const sellOfferController = require('../controllers/sellOffer');

router.get('/', auth, sellOfferController.getAllSellOffers);
router.get('/:productId', sellOfferController.getSellOfferByIdProduct);
router.post('/', sellOfferController.createSellOffer);
router.get('/:id', sellOfferController.getOneSellOffer);
router.put('/:id', sellOfferController.modifySellOffer);
router.delete('/:id', sellOfferController.deleteSellOffer);

module.exports = router;