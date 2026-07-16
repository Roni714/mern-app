const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(mongo_url);
  isConnected = true;
  console.log('MongoDB Connected...');
};

module.exports = connectDB;
