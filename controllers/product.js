const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    features: req.body.features,
    state: req.body.state,
    image: req.body.image,
    price: req.body.price,
    stock: req.body.stock,
    sellerId: req.body.sellerId,
    // category : { type: ProductCategory, required: true },
    // warehouse : { type: Warehouse },
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
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Product.updateOne({_id: req.params.id}, product).then(
    () => {
      res.status(201).json({
        message: 'Product updated successfully!'
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
  Product.find().then(
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