const ProductBrand = require('../models/ProductBrand');

exports.createProductBrand = (req, res, next) => {
  const productBrand = new ProductBrand({
    name: req.body.name,
    categoryId: req.body.categoryId,
  });
  productBrand.save().then(
    () => {
      res.status(201).json({
        message: 'Product brand created'
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

exports.getOneBrand = (req, res, next) => {
  ProductBrand.findOne({
    _id: req.params.id
  }).then(
    (productBrand) => {
      res.status(200).json(productBrand);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProductBrand = (req, res, next) => {
  const productBrand = new ProductBrand({
    _id: req.params.id,
    name: req.body.name,
    categoryId: req.body.categoryId,
  });
  ProductBrand.updateOne({_id: req.params.id}, productBrand).then(
    () => {
      res.status(201).json({
        message: 'Product brand updated'
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

exports.deleteProductBrand = (req, res, next) => {
  ProductBrand.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Product brand deleted'
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

exports.getAllBrands = (req, res, next) => {
  ProductBrand.find().then(
    (productbrands) => {
      res.status(200).json(productbrands);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};