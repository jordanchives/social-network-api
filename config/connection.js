const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

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
