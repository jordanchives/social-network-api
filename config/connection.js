const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.01:27017/socialNetworkDB';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', () => {
  console.log('Database connected:', uri);
});

module.exports = db;
