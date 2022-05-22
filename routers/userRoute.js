const express = require("express");
const {
  createUser,
  loginUser,
  profile,
} = require("../controller/userController");

const route = express.Router();

route.post("/register", createUser);
route.post("/login", loginUser);
route.get("/profile", profile);

module.exports = route;
