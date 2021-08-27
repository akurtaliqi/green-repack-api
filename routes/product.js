const express = require('express');
const router = express.Router();

const auth = require('../config/auth');
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getOneProduct);
router.put('/:id', auth, productController.modifyProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;