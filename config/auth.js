const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const secret_token = process.env.JWT_SECRET_TOKEN;
    console.log(token)
    console.log(secret_token)
    userId = req.params.id;
    if (userId){
      console.log("ok")
    } else {
      console.log(" not ok");
    }
    //const decodedToken = jwt.verify(token, secret_token);
    //console.log(decodedToken)
    //console.log("ici")
    //console.log(userId)
    // const userId = decodedToken.userId;
    
    if (userId && token && secret_token) {
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