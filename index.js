'use strict';

require('dotenv').config();
const app = require('./app');
const http = require('http');
const db = require('./db');

const server = http.createServer(app);

db.on('connected', () => {
  server.listen(process.env.PORT,
      () => console.log(`App listening on port ${process.env.PORT}!`));
});
