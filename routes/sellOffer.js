const express = require('express');
const router = express.Router();

const sellOfferController = require('../controllers/sellOffer');

router.get('/', sellOfferController.getAllSellOffers);
router.get('/seller/:sellerId', sellOfferController.getAllSellOffersBySellerId);
router.get('/:productId', sellOfferController.getSellOfferByIdProduct);
router.post('/', sellOfferController.createSellOffer);
router.get('/:id', sellOfferController.getOneSellOffer);
router.put('/:id', sellOfferController.modifySellOffer);
router.delete('/:id', sellOfferController.deleteSellOffer);

module.exports = router;