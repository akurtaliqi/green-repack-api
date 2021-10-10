const express = require('express');
const router = express.Router();
const auth = require("../config/auth");

const stripe = require('../config/stripe');

router.get('/', stripe.createCheckoutSession);
router.get('/', stripe.createCheckoutSession);
router.get('/', stripe.createCheckoutSession);
router.get('/', stripe.createCheckoutSession);

module.exports = router;