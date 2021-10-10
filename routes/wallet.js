const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet');

router.get('/', walletController.getAllWallets);
router.post('/', walletController.createWallet);
router.get('/:id', walletController.getOneWallet);
router.put('/:id', walletController.modifyWallet);
router.delete('/:id', walletController.deleteWallet);

module.exports = router;