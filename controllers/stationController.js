"use strict";

const Connection = require("../models/connection");
const Station = require("../models/station");
const rectangleBounds = require("../helper");

const getStations = async (req, res) => {
  const start = req.query.start;
  const limit = req.query.limit;
  const topRight = req.query.topRight;
  const bottomLeft = req.query.bottomLeft;
  try {
    console.log("query", req.query);

    // filter results based on provided query parameters
    if (limit || start || topRight || req.query.bottomLeft) {
      if (Number(start) && Number(limit) && Number(limit) < 11) {
        const filteredStations = await Station.find({})
          .skip(Number(start))
          .limit(Number(limit))
          .populate({
            path: "Connections",
            populate: [
              { path: "ConnectionTypeID" },
              { path: "CurrentTypeID" },
              { path: "LevelID" },
            ],
          });
        return res.json(filteredStations);

      } else if (topRight && req.query.bottomLeft) {
        // filtering by geolocation
        const filteredbyLocation = await Station
          .find(null, null, { limit: 10 })
          .populate({
            path: "Connections",
            populate: [
              { path: "ConnectionTypeID" },
              { path: "LevelID" },
              { path: "CurrentTypeID" },
            ],
          })
          .where("Location")
          .within(rectangleBounds(JSON.parse(topRight), JSON.parse(bottomLeft)));
        return res.json(filteredbyLocation);
        
      } else {
        return res
          .status(400)
          .send(
            "error: invalid query parameters: make sure all parameters and their values are correct!"
          );
      }
    } // returns value only if no query parameters are passed: default
    else if (Object.keys(req.query).length === 0) {
      return res.json(await Station.find({}).limit(10)).populate({
        path: "Connections",
        populate: [
          { path: "ConnectionTypeID" },
          { path: "CurrentTypeID" },
          { path: "LevelID" },
        ],
      });
    }
    return res.status(404).end();
  } catch (err) {
    console.log(err);
  }
};

const getStation = async (req, res) => {
  try {
    // retrieve and populates the specified paths of Station document with Connection documents
    const dataFromDb = await Station.findById(req.params.id).populate({
      path: "Connections",
      populate: [
        { path: "ConnectionTypeID" },
        { path: "CurrentTypeID" },
        { path: "LevelID" },
      ],
    });
    if (dataFromDb) return res.json(dataFromDb);
    return res.status(400).send({ error: "wrong or missing id parameter" });
  } catch (err) {
    console.error(err);
  }
};

const createStation = async (req, res) => {
  const updateInfo = req.body.Station;
  const stationConnections = req.body.Connections;
  console.log(req.body);

  try {
    // creates connections for station and save to db using Promise.all
    const connectionDocs = stationConnections.map(
      (conn) =>
        new Connection.Connection({
          ConnectionTypeID: conn.ConnectionTypeID,
          CurrentTypeID: conn.CurrentTypeID,
          LevelID: conn.LevelID,
          Quantity: Number(conn.Quantity),
        })
    );
    const connectionsFromDb = await Promise.all(
      connectionDocs.map((doc) => doc.save())
    );
    console.log("db", connectionsFromDb);

    // new station is created using the ObjectId of the newly created connections from updateInfo
    const connectionsIDs = connectionsFromDb.map((conn) => conn._id);
    console.log("id", connectionsIDs);
    const stationDoc = new Station({
      Title: updateInfo.Title,
      Town: updateInfo.Town,
      AddressLine1: updateInfo.AddressLine1,
      StateOrProvince: updateInfo.StateOrProvince,
      Postcode: updateInfo.Postcode,
      Location: updateInfo.Location,
      Connections: connectionsIDs,
    });

    const savedStation = await stationDoc.save();
    console.log("saved", savedStation);

    return res.json(savedStation);
  } catch (err) {
    console.error("post error", error.message);
  }
};

const modifyStation = async (req, res) => {
  try {
    const updateInfo = req.body.Station;
    const connInfo = req.body.Connections;
    console.log("updateinfo", updateInfo);
    if (updateInfo && connInfo) {
      // updates connections and return and array of updated connections
      const updatedConnections = await Promise.all(
        connInfo.map((conn) =>
          Connection.Connection.findByIdAndUpdate(conn._id, conn, { new: true })
        )
      );

      // retrieves station object from db and updates it
      const stationFromDb = await Station.findById(req.params.id);
      stationFromDb.Title = updateInfo.Title;

      stationFromDb.Town = updateInfo.Town;
      stationFromDb.AddressLine1 = updateInfo.AddressLine1;
      stationFromDb.StateOrProvince = updateInfo.StateOrProvince;
      stationFromDb.Postcode = updateInfo.Postcode;
      stationFromDb.Location = updateInfo.Location;
      stationFromDb.Connections = updatedConnections.map((conn) => conn._id);

      const updatedStation = await await stationFromDb.save();
      return res.json(updatedStation);
    }
    return res.status(400).send("missing or incorrect data: update failed");
  } catch (e) {
    console.error(e);
  }
};

const deleteStation = async (req, res) => {
  try {
    await Station.findByIdAndDelete(req.params.id);
    return res.send(`Station with id ${req.params.id} successfully deleted!`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getStations,
  getStation,
  createStation,
  modifyStation,
  deleteStation,
};
