const express = require("express");

const {
    userRegister,
    userLogin
} = require("../controllers/authController");

const router = express.Router();

// User register
router.post("/register", userRegister);

// User login
router.post("/login", userLogin);


module.exports = router;
