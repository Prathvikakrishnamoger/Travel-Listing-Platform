if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "../.env" });
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({
  accessToken: mapToken,
});

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
  await Listing.deleteMany({});

  const data = [];

  for (let obj of initData.data) {
    let response = await geocodingClient
      .forwardGeocode({
        query: obj.location,
        limit: 1,
      })
      .send();

    obj.owner = "6a4220173177ee6bea075218";
    obj.geometry = response.body.features[0].geometry;

    data.push(obj);
  }

  await Listing.insertMany(data);

  console.log("Database initialized");
};
initDB();
