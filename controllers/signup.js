const userService = require("../services/signup");
const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });

    res
      .status(201)
      .json({ success: true, message: `User ${newUser.name} created` });
  } catch (error) {
    res.status(400).json({ success: false, message: "Can not create user" });
  }
}

module.exports = { createUser };
