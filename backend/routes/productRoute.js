const express = require("express");
const {
  createProduct,
  getAllProduct,
} = require("../controllers/productController");
const { isAuthenticated, authorizeRoles } = require("../middleware/userAuth");
const router = express.Router();

router
  .route("/product/create")
  .post(isAuthenticated, authorizeRoles("admin"), createProduct);

router.route("/products").get(getAllProduct);

module.exports = router;
