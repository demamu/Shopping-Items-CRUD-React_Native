const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const {protect} = require('../middleware/auth');

router.get('/', getProducts);

router.get('/:id', getProduct);

 router.post('/add', protect, addProduct);

router.put('/:id', protect, updateProduct);

router.delete('/:id', protect, deleteProduct);

module.exports = router;
