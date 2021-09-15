const ProductCategory = require('../models/productCategory');

exports.createCategory = (req, res, next) => {
  const productCategory = new ProductCategory({
    name: req.body.name,
  });
  productCategory.save().then(
    () => {
      res.status(201).json({
        message: 'category created'
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

exports.getOneCatgory = (req, res, next) => {
  ProductCategory.findOne({
    _id: req.params.id
  }).then(
    (productCategory) => {
      res.status(200).json(productCategory);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyCategory = (req, res, next) => {
  const productCategory = new ProductCategory({
    _id: req.params.id,
    name: req.body.name,
  });
  ProductCategory.updateOne({_id: req.params.id}, productCategory).then(
    () => {
      res.status(201).json({
        message: 'category updated'
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

exports.deleteCategory = (req, res, next) => {
  ProductCategory.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'category deleted'
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

exports.getAllCategories = (req, res, next) => {
  ProductCategory.find().then(
    (categories) => {
      res.status(200).json(categories);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};