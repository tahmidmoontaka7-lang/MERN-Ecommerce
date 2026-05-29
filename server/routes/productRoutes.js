const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getSingleProduct);

// ADD product
router.post("/", addProduct);

// UPDATE product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;