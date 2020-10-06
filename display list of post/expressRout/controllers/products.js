const { find, findById } = require('../models/Product');
const Product = require('../models/Product');

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (err) {
    // res.status(500).json({ success: false, message: 'Server Error' });
    next(err);
  }
};
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    // res.status(500).json({ success: false, message: 'Server Error' });
    next(err);
  }
};
exports.addProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;

    const product = await Product.create({ name, price, description });

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await findById(req.params.id);

    if (!product) {
      res.status(400).json({ success: false, message: err.message });
    }

    product = await Product.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
