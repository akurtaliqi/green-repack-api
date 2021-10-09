const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOneOrder);
router.put('/:id', orderController.modifyOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;