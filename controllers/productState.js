const ProductState = require('../models/ProductState');

exports.createProductState = (req, res, next) => {
  const productState = new ProductState({
    name: req.body.name,
    description: req.body.description,
    decrease: req.body.decrease,
  });
  productState.save().then(
    () => {
      res.status(201).json({
        message: 'Product state created'
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

exports.getOneProductState = (req, res, next) => {
    ProductState.findOne({
    _id: req.params.id
  }).then(
    (productState) => {
      res.status(200).json(productState);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProductState = (req, res, next) => {
  const productState = new ProductState({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    decrease: req.body.decrease,
  });
  ProductState.updateOne({_id: req.params.id}, productState).then(
    () => {
      res.status(201).json({
        message: 'Product state updated'
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

exports.deleteProductState = (req, res, next) => {
  ProductState.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Product state deleted'
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

exports.getAllProductStates = (req, res, next) => {
  ProductState.find().then(
    (productstates) => {
      res.status(200).json(productstates);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};