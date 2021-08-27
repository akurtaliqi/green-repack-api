const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/seller');

router.post('/signup', sellerController.signup);
router.post('/login', sellerController.login);

module.exports = router;