const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  const token = user.getSignedJwtToken();
  res
    .status(200)
    .json({ success: true, token, msg: "User Registered Successfully" });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Please provide an email and password",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      msg: "Please provide an email",
    });
  }
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      msg: "Invalid Credential",
    });
  }

  const token = user.getSignedJwtToken();
  res.status(200).json({ success: true, token, email, name: user.name });
};
