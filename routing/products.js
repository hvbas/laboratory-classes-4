const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

// List all products
router.get("/", productsController.getProductsView);

// Add product page
router.get("/add", productsController.getAddProductView);

// Add new product
router.post("/add", productsController.addNewProduct);

// Show newest product
router.get("/new", productsController.getNewProductView);

// Show specific product
router.get("/:name", productsController.getProductView);

// Delete product
router.delete("/:name", productsController.deleteProduct);

module.exports = router;
