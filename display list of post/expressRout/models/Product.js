const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add the product name'],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: [true, 'please add product description'],
    max: [500, 'Description can not be more than 500 characters'],
  },
});


module.exports = mongoose.model('Product', ProductSchema);
