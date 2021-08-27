const express = require('express');
const router = express.Router();

const buyerController = require('../controllers/buyer');

router.post('/signup', buyerController.signup);
router.post('/login', buyerController.login);
router.get('/:id', buyerController.getOneBuyer);

module.exports = router;