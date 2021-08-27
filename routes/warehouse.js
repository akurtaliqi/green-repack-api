const express = require('express');
const router = express.Router();

const warehouseController = require('../controllers/warehouse');

router.get('/', warehouseController.getAllWarehouses);
router.post('/', warehouseController.createWarehouse);
router.get('/:id', warehouseController.getOneWarehouse);
router.put('/:id', warehouseController.modifyWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;