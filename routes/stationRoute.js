'use strict';

const express = require('express');
const stationRouter = new express.Router();
const stationcontroller = require('../controllers/stationController');

stationRouter.route('/')
    .get(stationcontroller.getStations)
    .post(stationcontroller.createStation);

stationRouter.route('/:id')
    .get(stationcontroller.getStation)
    .put(stationcontroller.modifyStation)
    .delete(stationcontroller.deleteStation);


module.exports = stationRouter;
