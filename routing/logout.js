const express = require("express");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

// Logout page
router.get("/", logoutController.getLogoutView);

module.exports = router;
