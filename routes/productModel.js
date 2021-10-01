const express = require('express');
const router = express.Router();

const productModelController = require('../controllers/productModel');

router.get('/', productModelController.getAllProductModels);
router.post('/', productModelController.createProductModel);
// router.get('/:id', productModelController.getOneProductModel);
router.get('/category/:id', productModelController.getProductModelByCategory);
router.put('/:id', productModelController.modifyProductModel);
router.delete('/:id', productModelController.deleteProductModel);

module.exports = router;