require('dotenv').config()


module.exports = {
    JWTSecret: process.env.ACCESS_TOKEN_SECRET,
}