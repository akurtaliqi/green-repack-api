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
const port = normalizePort(process.env.PORT || "4242");
const END_POINT_SECRET = process.env.END_POINT_SECRET;

const app = express();
const stripe = require('stripe')('sk_test_51JfOTNKqXtPaxbjmHLKF5pT44Yp0Yo3kf7fOLM42bv2wMwEdIgodPoeKUpbYv39IVUwjjrAQEmDmVc22aHb8MMAQ00qE7RQmhK');

// app.use();
app.use(cors())
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

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
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


app.use(express.static(__dirname + "/uploads"));
app.use("/uploads", express.static("uploads"));
app.use("/create-checkout-session", express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/product", productRoutes);
app.use("/api/buyer/auth", buyerRoutes);
app.use("/api/seller/auth", sellerRoutes);
app.use("/api/admin/auth", adminRoutes);
app.use("/api/productCategory", productCategoryRoutes);
app.use("/api/warehouse", wahrehouseRoutes);
app.use("/api/productState", productStateRoutes);
app.use("/api/productModel", productModelRoutes);
app.use("/api/productBrand", productBrandRoutes);
app.use("/api/sellOffer", sellOfferRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
