const express = require('express');
const router = express.Router();
const greenCoinController = require('../controllers/greencoin');

router.get('/', greenCoinController.getAllGreenCoins);
router.post('/', greenCoinController.createGreenCoin);
router.get('/:id', greenCoinController.getOneGreenCoin);
router.put('/:id', greenCoinController.modifyGreenCoin);
router.delete('/:id', greenCoinController.deleteGreenCoin);

module.exports = router;