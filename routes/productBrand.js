const express = require('express');
const router = express.Router();

const productBrandController = require('../controllers/productBrand');

router.get('/', productBrandController.getAllBrands);
router.post('/', productBrandController.createProductBrand);
router.get('/:id', productBrandController.getOneBrand);
router.put('/:id', productBrandController.modifyProductBrand);
router.delete('/:id', productBrandController.deleteProductBrand);

module.exports = router;