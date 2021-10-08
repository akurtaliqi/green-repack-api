const express = require('express');
const router = express.Router();
const auth = require("../config/auth");

const sellOfferController = require('../controllers/sellOffer');

router.post('/:id', auth, sellOfferController.getAllSellOffersBySellerId);

module.exports = router;