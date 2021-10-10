const Order = require('../models/Order');

exports.createOrder = (req, res, next) => {
  const order = new Order({
    buyerId: req.body.buyerId,
    productId: req.body.productId,
    price: req.body.price,
    orderDate: Date.now(),
  });
  order.save().then(
    () => {
      res.status(201).json({
        message: 'order created'
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

exports.getOneOrder = (req, res, next) => {
  Order.findOne({
    _id: req.params.id
  }).then(
    (order) => {
      res.status(200).json(order);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyOrder = (req, res, next) => {
  const order = new Order({
    _id: req.params.id,
    buyerId: req.body.buyerId,
    productId: req.body.productId,
    price: req.body.price,
    orderDate: req.body.orderDate,
  });
  Order.updateOne({_id: req.params.id}, order).then(
    () => {
      res.status(201).json({
        message: 'order updated'
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

exports.deleteOrder = (req, res, next) => {
  Order.deleteOne({_id: req.params.id}).then(
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

exports.getAllOrders = (req, res, next) => {
  Order.find().then(
    (orders) => {
      res.status(200).json(orders);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};