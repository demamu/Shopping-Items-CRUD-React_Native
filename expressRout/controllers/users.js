const User = require('../models/User');

exports.getProducts = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all Product' });
};
exports.getProduct = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get a Product ${req.params.id}` });
};

exports.updateProduct = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update Product ${req.params.id}` });
};
exports.deleteProduct = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete Product ${req.params.id}` });
};

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
    .json({ success: true, token, msg: 'User Registered Successfully' });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: 'Please provide an email and password',
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      success: false,
      msg: 'Please provide an email',
    });
  }
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      msg: 'Invalid Credential',
    });
  }

  const token = user.getSignedJwtToken();
  res
    .status(200)
    .json({ success: true, token, msg: 'User login Successfully' });
};
