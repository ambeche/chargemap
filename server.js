'use strict';
require('dotenv').config();
const db = require('./db');
const express = require('express');
const cors = require('cors');
const stationRoute = require('./routes/stationRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/station', stationRoute);

db.on('connected', () => {
  app.listen(process.env.PORT || 3007, () =>
    console.log(`App listening on port ${process.env.PORT}!`)
  );
});
