const express = require('express');
const router = express.Router();

const sellOfferController = require('../controllers/sellOffer');

router.get('/:id', sellOfferController.getAllSellOffersBySellerId);

module.exports = router;