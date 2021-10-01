const express = require('express');
const router = express.Router();

const sellOfferController = require('../controllers/sellOffer');

router.get('/', sellOfferController.getAllSellOffers);
router.get('/seller/:id', sellOfferController.getAllSellOffersBySellerId);
router.post('/', sellOfferController.createSellOffer);
router.get('/:id', sellOfferController.getOneSellOffer);
router.put('/:id', sellOfferController.modifySellOffer);
router.delete('/:id', sellOfferController.deleteSellOffer);

module.exports = router;