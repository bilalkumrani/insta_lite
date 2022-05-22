const User = require("../models/user");

const createUser = async (req, res) => {
  console.log("*******inside create user", req.files);
  const { name, email, userName, password } = req.body;
  if (!name || !userName || !email || !password) {
    console.log("****Inside error", req.body);
    return res.redirect("back");
  }
  const data = {
    ...req.body,
    image: req.files.img.name,
  };
  return User.create(data).then((data) => res.redirect("/"));
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne(username);
  if (!user) {
    res.render("/login", { error: "username or password wrong" });
  }
};

module.exports.loginUser = loginUser;
module.exports.createUser = createUser;
