const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller');

router.post('/signup', sellerController.signup);
router.post('/login', sellerController.login);
router.get('/:id', sellerController.getOneSeller);

module.exports = router;