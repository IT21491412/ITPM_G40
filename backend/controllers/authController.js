const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// --------- Create a Token
const createToken = (_id, exptime) => {
  return jwt.sign({ _id }, process.env.SECRETKEY, { expiresIn: exptime });
};

// --------- User register
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --------- User Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Incorrect email" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    // Create a token with an expiration time of 1 day
    const token = createToken(user._id, "1d");

    // Send success response with email and token
    res.status(200).json({ email, userID: user._id, token });
  } catch (error) {
    // Send error response
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
