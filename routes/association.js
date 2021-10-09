const express = require('express');
const router = express.Router();

const associationController = require('../controllers/association');

router.post('/signup', associationController.signup);
router.post('/login', associationController.login);
router.get('/:id', associationController.getOneAssociation);

module.exports = router;