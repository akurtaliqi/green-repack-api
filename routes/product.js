const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const productController = require('../controllers/product');

router.get('/', auth, productController.getAllProducts);
router.post('/', auth, productController.createProduct);
router.get('/:id', auth, productController.getOneProduct);
router.put('/:id', auth, productController.modifyProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;