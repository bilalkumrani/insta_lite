const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/insta_lite");
const db = mongoose.connection;

db.on("error", () => {
  console.log("there is an error connecting");
});

db.once("open", () => {
  console.log("connection is opened");
});

module.exports = mongoose;
