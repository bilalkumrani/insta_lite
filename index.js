const express = require("express");
const path = require("path");
const mongoose = require("./config/mongoose");
const fileUpload = require("express-fileupload");
const userRouter = require("./routers/userRoute");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "assets")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Router middleware
app.use(userRouter);

const PORT = 4000;

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/signup", (req, res) => {
  return res.render("signup");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  return res.redirect("/");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("there is error");
  }
  console.log("app is running on port: ", PORT);
});
