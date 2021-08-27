const Category = require('../models/category');

exports.createCategory = (req, res, next) => {
  const category = new Category({
    ame: req.body.name,
    //attribs
  });
  category.save().then(
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
  Category.findOne({
    _id: req.params.id
  }).then(
    (category) => {
      res.status(200).json(category);
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
  const category = new Category({
    _id: req.params.id,
    title: req.body.title,
    //attribs
  });
  Category.updateOne({_id: req.params.id}, category).then(
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
  Category.deleteOne({_id: req.params.id}).then(
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
  Category.find({ sellOffer: true }).then(
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