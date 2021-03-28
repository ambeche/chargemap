const express = require('express');
const cors = require('cors');
const stationRoute = require('./routes/stationRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/station', stationRoute);

module.exports = app;
