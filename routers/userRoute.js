const express = require("express");
const { createUser, loginUser } = require("../controller/userController");

const route = express.Router();

route.post("/register", createUser);

module.exports = route;
