const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const secret_token = process.env.JWT_SECRET_TOKEN;
    userId = req.body.userId;
    const decodedToken = jwt.verify(token, secret_token);
    console.log(decodedToken)
    // const userId = decodedToken.userId;
    
    if (token == secret_token && userId) {
      next();
    } else {
      throw 401;
      // TODO: handle error 
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!'),
      message: "Unauthorized"
    });
  }
};