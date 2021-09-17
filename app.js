require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product");
const buyerRoutes = require("./routes/buyer");
const sellerRoutes = require("./routes/seller");
const productCategoryRoutes = require("./routes/productCategory");
const wahrehouseRoutes = require("./routes/warehouse");
const productStateRoutes = require("./routes/productState");

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
const port = normalizePort(process.env.PORT || "4000");

const app = express();
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

app.use(express.static(__dirname + "/uploads"));
app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/product", productRoutes);
app.use("/api/buyer/auth", buyerRoutes);
app.use("/api/seller/auth", sellerRoutes);
app.use("/api/productCategory", productCategoryRoutes);
app.use("/api/warehouse", wahrehouseRoutes);
app.use("/api/warehouse", productStateRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
