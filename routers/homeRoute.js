const express = require("express");
const { home, signup, login } = require("../controller/homeController");

const route = express.Router();

route.get("/", home);

route.get("/signup", signup);

route.get("/login", login);

module.exports = route;
