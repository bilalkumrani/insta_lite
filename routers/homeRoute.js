const express = require("express");
const { home, signup, login, post } = require("../controller/homeController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const route = express.Router();

route.get("/", isAuthenticated, home);
route.get("/post", isAuthenticated, post);


route.get("/signup", signup);

route.get("/login", login);

module.exports = route;
