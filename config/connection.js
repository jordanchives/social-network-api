const mongoose = require('mongoose');

// Connect to the Mongo DB
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

mongoose.connect(uri);

const db = mongoose.connection;

// Log any errors connecting with mongoose
db.on('error', (err) => {
  console.error('Connection error:', err);
});

// Log a success message when connected to the database
db.once('open', () => {
  console.log('Database connected:', uri);
});

module.exports = db;
