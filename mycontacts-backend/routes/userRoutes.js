const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();  

// Register user route
router.post("/register", registerUser);

// Login user route
router.post("/login", loginUser);

// Get current user info route
router.get("/current", currentUser);

module.exports = router;
