const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    // if (req.data.sellerId && req.body.sellerId !== userId) {
    next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};