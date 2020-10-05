const mongoose = require('mongoose');
const uri =
  'mongodb+srv://dani:1234@cluster0-ndlxw.mongodb.net/React?retryWrites=true&w=majority';
const connectDB = async () => {
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected`);
};
module.exports = connectDB;
