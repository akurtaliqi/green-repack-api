const express = require('express');
const router = express.Router();

const stripe = require('../config/stripe');

router.get('/', stripe.createCheckoutSession);
router.get('/', stripe.createPrice);
router.get('/', stripe.createProduct);
router.get('/:id', stripe.getPaymentIntent);

module.exports = router;