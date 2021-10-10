const Product = require('../models/Product');

exports.createProduct = (req, res) => {
  console.log(new Date().toISOString())
  console.log(new Date())
  const start = Date.now();
  console.log(start);
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    brand: req.body.brand,
    features: req.body.features,
    createDate: start,
    updateDate: null,
    sent: false,
    sold: false,
    received: false,
    verified: false,
    sellPrice: null,
    productStateId: req.body.productStateId,
    sellerId: req.body.sellerId,
    categoryId: req.body.categoryId,
    productModelId: req.body.productModelId,
  });
  // TO DO CATCH IF BAD REQUEST
  if (req.files) {
    product["images"] = [];
    req.files.map((file) => {
      product.images.push(file.filename);
    });
  }

  product.save().then(
    (productId) => {
      res.status(201).json(product._id);
    }
    ).catch((error) => {
      res.status(400).json({
      error: error,
    });
  });
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

exports.modifySent = (req, res, next) => {
  const product = new Product({
    _id: req.params.id,
    images: req.body.images,
    sent: req.body.sent,
    updateDate: Date.now(),
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


exports.modifyProduct = (req, res, next) => {
  const product = new Product({
    _id: req.params.id,
    images: req.body.images,
    title: req.body.title,
    description: req.body.description,
    brand: req.body.brand,
    features: req.body.features,
    createDate: req.body.createDate,
    updateDate: Date.now(),
    sellPrice: req.body.sellPrice,
    sold: req.body.sold,
    sent: req.body.sent,
    received: req.body.received,
    verified: req.body.verified,
    productStateId: req.body.productStateId,
    sellerId: req.body.sellerId,
    categoryId: req.body.categoryId,
    productModelId: req.body.productModelId,
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
  // TODO fix sellOfferAccept
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

exports.getAllProductsToSell = (req, res, next) => {
  // TODO fix sellOfferAccept
 Product.find({ sent:true, received:true, verified:true, sold:false
}).then(
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
   // TODO fix sellOfferAccept
  Product.find({ verified:true }).then(
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

exports.getAllProductsToValidate = (req, res, next) => {
  // TODO fix sellOfferAccept
 Product.find({ sent:true, received:false, verified:false,  }).then(
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

