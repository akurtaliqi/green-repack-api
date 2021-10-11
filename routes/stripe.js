const express = require('express');
const router = express.Router();

const stripe = require('../config/stripe');

router.get('/', stripe.getPaymentIntent);
router.post('/:id', stripe.createCheckoutSession);
// router.post('/:id', stripe.createProduct);
// router.get('/:id', stripe.createPrice);

module.exports = router;