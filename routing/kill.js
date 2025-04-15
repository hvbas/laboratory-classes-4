const express = require("express");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

// Kill application
router.get("/", logoutController.killApplication);

module.exports = router;
