const User = require("../models/user");
const bcrypt = require('bcrypt')
const path = require('path')
const createUser = async (req, res) => {

  console.log("*******inside create user", req.files);

  const img = req.files?.img || { name: 'not image' };
  if (img.name !== 'not image') {
    img.mv(path.resolve(__dirname, '../assets/image', img.name));
  }

  const { name, email, userName, password } = req.body;
  if (!name || !userName || !email || !password) {
    console.log("****Inside error", req.body);
    return res.redirect("back");
  }

  const data = {
    ...req.body,
    image: req.files?.img.name || path.resolve(__dirname, '../assets/image', 'inta_dp.png'),
  };
  return User.create(data).then((data) => res.redirect("/"));
};

const loginUser = async (req, res) => {

  console.log(req.body);
  const { username, password } = req.body;
  const user = await User.find({ userName: username });
  if (!user) {
    return res.render("/login", { error: "username or password wrong" });
  }

  console.log(user);
  await bcrypt.compare(password, user.password, (error, data) => {
    console.log(error);
    console.log(data);
    if (data) {
      res.render('/')
    }
    else {
      res.redirect('back');
    }
  });


};

module.exports.loginUser = loginUser;
module.exports.createUser = createUser;
