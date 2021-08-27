const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    description:req.body.description,
    brand: req.body.brand,
    features: req.body.features,
    state: req.body.state,
    sellOfferAccept: false,
    sellerId: req.body.sellerId,
    categoryId: req.body.categoryId,
    warehouseId: req.body.warehouseId,
  });
  product.save().then(
    () => {
      res.status(201).json({
        message: 'Product created'
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

exports.getOneProduct = (req, res, next) => {
  Product.findOne({
    _id: req.params.id
  }).then(
    (product) => {
      res.status(200).json(product);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProduct = (req, res, next) => {
  const product = new Product({
    _id: req.params.id,
    title: req.body.title,
    description:req.body.description,
    brand: req.body.brand,
    features: req.body.features,
    state: req.body.state,
    sellerId: req.body.sellerId,
    categoryId: req.body.categoryId,
    warehouseId: req.body.warehouseId,
  });
  Product.updateOne({_id: req.params.id}, product).then(
    () => {
      res.status(201).json({
        message: 'Product updated'
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

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Product deleted'
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

exports.getAllProducts = (req, res, next) => {
  Product.find({ sellOffer: true }).then(
    (products) => {
      res.status(200).json(products);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllProductsAccepted = (req, res, next) => {
  Product.find({ sellOffer: true }).then(
    (products) => {
      res.status(200).json(products);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};