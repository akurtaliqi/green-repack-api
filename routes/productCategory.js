const express = require('express');
const router = express.Router();

const productCategoryController = require('../controllers/category');

router.get('/', productCategoryController.getAllCategories);
router.post('/', productCategoryController.createCategory);
router.get('/:id', productCategoryController.getOneCatgory);
router.put('/:id', productCategoryController.modifyCategory);
router.delete('/:id', productCategoryController.deleteCategory);

module.exports = router;