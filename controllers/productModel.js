const ProductModel = require('../models/ProductModel');

exports.createProductModel = (req, res, next) => {
  const productModel = new ProductModel({
    name: req.body.name,
    // brand: req.body.brand,
    price: req.body.price,
    categoryId: req.body.categoryId,
  });
  productModel.save().then(
    () => {
      res.status(201).json({
        message: 'Product model created'
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

exports.getOneProductModel = (req, res, next) => {
    ProductModel.findOne({
    _id: req.params.id
  }).then(
    (productModel) => {
      res.status(200).json(productModel);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getProductModelByCategory = (req, res, next) => {
  console.log('it works')
ProductModel.findOne({
  categoryId: req.params.id
}).then(
  (ProductModel) => {
    res.status(200).json(ProductModel);
  }
).catch(
  (error) => {
    res.status(404).json({
      error: error
    });
  }
);
};


exports.modifyProductModel = (req, res, next) => {
  const productModel = new ProductModel({
    _id: req.params.id,
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    categoryId: req.body.categoryId,
  });
  ProductModel.updateOne({_id: req.params.id}, productModel).then(
    () => {
      res.status(201).json({
        message: 'Product model updated'
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

exports.deleteProductModel = (req, res, next) => {
    ProductModel.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Product model deleted'
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

exports.getAllProductModels = (req, res, next) => {
    ProductModel.find().then(
    (productmodels) => {
      res.status(200).json(productmodels);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};