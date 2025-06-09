const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ status: 400, msg: "User already exists" });

    if (!name || !email || !password) {
      return res.status(400).json({
        status: 400,
        msg: "All fields are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      hashedPassword,
    });

    if (user)
      return res
        .status(200)
        .json({ status: 200, msg: "User Created Successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, msg: "Internal Server Error", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: 400,
        msg: `User with ${email} not found`,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: 400,
        msg: "Invalid Password",
      });
    }
    const jwtToken = generateToken(user._id, user.name, user.email);
    res.status(200).json({
      status: 200,
      msg: "Login Successfully",
      token: jwtToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, msg: "Internal Server Error", error });
  }
};

module.exports = {
  signup,
  login,
};
