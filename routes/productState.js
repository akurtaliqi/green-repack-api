const express = require('express');
const router = express.Router();

const productStateController = require('../controllers/productState');

router.get('/', productStateController.getAllProductStates);
router.post('/', productStateController.createProductState);
router.get('/:id', productStateController.getOneProductState);
router.put('/:id', productStateController.modifyProductState);
router.delete('/:id', productStateController.deleteProductState);

module.exports = router;