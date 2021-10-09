const express = require('express');
const router = express.Router();
const associationProjectController = require('../controllers/associationProject');

router.get('/', associationProjectController.getAllAssociationProjects);
router.post('/', associationProjectController.createAssociationProject);
router.get('/:id', associationProjectController.getOneAssociationProject);
router.put('/:id', associationProjectController.modifyAssociationProject);
router.delete('/:id', associationProjectController.deleteAssociationProject);

module.exports = router;