const express = require("express");
const { createUser, loginUser } = require("../controller/userController");
const { isAuthenticated } = require('../middleware/isAuthenticated')
const route = express.Router();

route.post("/register", createUser);
route.post("/login", isAuthenticated, loginUser)

module.exports = route;
