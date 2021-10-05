const express = require("express");
const router = express.Router();
const multer = require("multer");

const auth = require("../config/auth");
const productController = require("../controllers/product");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/", productController.getAllProducts);
router.get("/validate", productController.getAllProductsToValidate);
router.post("/", upload.any(), productController.createProduct);
router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.modifyProduct);
router.put("/sent/:id", productController.modifySent);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
