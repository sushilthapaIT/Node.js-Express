const express = require("express");

const router = express.Router();  

// Register user route
router.post("/register", (req, res) => {
    res.json({ message: "Register the user" });
});

// Login user route
router.post("/login", (req, res) => {
    res.json({ message: "Login user" });
});

// Get current user info route
router.post("/current", (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = router;
