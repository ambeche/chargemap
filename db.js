'use strict';
const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('DB connected successfully');
  } catch (err) {
    console.error('Connection to db failed', err);
  }
})();

module.exports = mongoose.connection;