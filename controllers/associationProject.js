const AssociationProject = require('../models/AssociationProject');

exports.createAssociationProject = (req, res, next) => {
  const associationProject = new AssociationProject({
    // addressNumber: req.body.addressNumber,
  });
  associationProject.save().then(
    () => {
      res.status(201).json({
        message: 'association project created'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneAssociationProject = (req, res, next) => {
    AssociationProject.findOne({
    _id: req.params.id
  }).then(
    (associationProject) => {
      res.status(200).json(associationProject);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyAssociationProject = (req, res, next) => {
  const associationProject = new AssociationProject({
    _id: req.params.id,
    // addressNumber: req.body.addressNumber,
  });
  AssociationProject.updateOne({_id: req.params.id}, associationProject).then(
    () => {
      res.status(201).json({
        message: 'association project updated'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteAssociationProject = (req, res, next) => {
    AssociationProject.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'order deleted'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllAssociationProjects = (req, res, next) => {
    AssociationProject.find().then(
    (associationprojects) => {
      res.status(200).json(associationprojects);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};