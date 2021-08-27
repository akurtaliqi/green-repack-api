require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product');
const buyerRoutes = require('./routes/buyer');
const sellerRoutes = require('./routes/seller');
const productCategoryRoutes = require('./routes/productCategory');
const wahrehouseRoutes = require('./routes/warehouse');

const app = express();

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json())
app.use('/api/product', productRoutes);
app.use('/api/buyer/auth', buyerRoutes);
app.use('/api/seller/auth', sellerRoutes);
app.use('/api/productCategory', productCategoryRoutes);
app.use('/api/warehouse', wahrehouseRoutes);

module.exports = app;