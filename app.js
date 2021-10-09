require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

const productRoutes = require("./routes/product");
const buyerRoutes = require("./routes/buyer");
const sellerRoutes = require("./routes/seller");
const adminRoutes = require("./routes/admin");
const productCategoryRoutes = require("./routes/productCategory");
const wahrehouseRoutes = require("./routes/warehouse");
const productStateRoutes = require("./routes/productState");
const productModelRoutes = require("./routes/productModel");
const productBrandRoutes = require("./routes/productBrand");
const sellOfferRoutes = require("./routes/sellOffer");
const sellOfferSellerRoutes = require("./routes/sellOfferSeller");
const association = require("./routes/association");
const associationProject = require("./routes/associationProject");
const greenCoin = require("./routes/greencoin");
const order = require("./routes/order");

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
const END_POINT_SECRET = process.env.END_POINT_SECRET;
const db_cloud_host = process.env.DB_HOST_CLOUD;
const db_cloud_local = process.env.DB_HOST_LOCAL;
const app = express();
const stripe = require('stripe')('sk_test_51JfOTNKqXtPaxbjmHLKF5pT44Yp0Yo3kf7fOLM42bv2wMwEdIgodPoeKUpbYv39IVUwjjrAQEmDmVc22aHb8MMAQ00qE7RQmhK');

// app.use();
app.use(cors())
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const endpointSecret = END_POINT_SECRET;

const YOUR_DOMAIN = 'http://localhost:8081';

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  console.log(sig)
  console.log(endpointSecret)

  let event;
  
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      // const paymentIntent = event.data.object;
      const paymentIntent = stripe.paymentIntents.create({
        amount: 2000,
        currency: 'eur',
        payment_method_types: ['card'],
      });
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.post('/webhook/createprice', express.raw({type: 'application/json'}), (request, response) => {
  stripe.subscriptions.create({
    customer: '{{CUSTOMER_ID}}',
    items: [{
      price_data: {
        unit_amount: 5000,
        currency: 'usd',
        product: '{{PRODUCT_ID}}',
        recurring: {
          interval: 'month',
        },
      },
    }],
  });
});

app.use(express.static(__dirname + "/uploads"));
app.use("/uploads", express.static("uploads"));
app.use("/create-checkout-session", express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/buyer/auth", buyerRoutes);
app.use("/api/seller/auth", sellerRoutes);
app.use("/api/admin/auth", adminRoutes);
app.use("/api/association/auth", association);

app.use("/api/product", productRoutes);
app.use("/api/productCategory", productCategoryRoutes);
app.use("/api/warehouse", wahrehouseRoutes);
app.use("/api/productState", productStateRoutes);
app.use("/api/productModel", productModelRoutes);
app.use("/api/productBrand", productBrandRoutes);


app.use("/api/sellOffer", sellOfferRoutes);
app.use("/api/selloffer/seller", sellOfferSellerRoutes);

app.use("/api/greencoin", greenCoin);
app.use("/api/order", order);
app.use("/api/associationProject", associationProject);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
