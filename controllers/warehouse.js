const Warehouse = require('../models/Warehouse');

exports.createWarehouse = (req, res, next) => {
  const warehouse = new Warehouse({
    addressNumber: req.body.addressNumber,
    addressRoad: req.body.addressRoad,
    addressPostalCode: req.body.addressPostalCode,
    addressCity: req.body.addressCity,
    country: req.body.country,
  });
  warehouse.save().then(
    () => {
      res.status(201).json({
        message: 'warehouse created'
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

exports.getOneWarehouse = (req, res, next) => {
  Warehouse.findOne({
    _id: req.params.id
  }).then(
    (warehouse) => {
      res.status(200).json(warehouse);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyWarehouse = (req, res, next) => {
  const warehouse = new Warehouse({
    _id: req.params.id,
    addressNumber: req.body.addressNumber,
    addressRoad: req.body.addressRoad,
    addressPostalCode: req.body.addressPostalCode,
    addressCity: req.body.addressCity,
    country: req.body.country,
  });
  Warehouse.updateOne({_id: req.params.id}, warehouse).then(
    () => {
      res.status(201).json({
        message: 'warehouse updated'
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

exports.deleteWarehouse = (req, res, next) => {
  Warehouse.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'warehouse deleted'
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

exports.getAllWarehouses = (req, res, next) => {
  Warehouse.find({ sellOffer: true }).then(
    (warehouses) => {
      res.status(200).json(warehouses);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};