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
    // console.log("****Inside error", req.body);
    return res.redirect("back");
  }

  const data = {
    ...req.body,
    image: req.files?.img.name || path.resolve(__dirname, '../assets/image', 'inta_dp.png'),
  };

  //* Cookie options 
  const options = {
    expires: new Date(
      //       hours  minutes  seconds   milliseconds
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  const user = await User.create(data);
  const token = user.getJwtToken()
  res.cookie('token', token, options)
  return res.redirect("/");
};

const loginUser = async (req, res) => {

  console.log(req.body);
  if (req.user) {
    return res.render("/")
  }
  const { username, password } = req.body;
  const user = await User.findOne({ userName: username });
  if (!user) {
    return res.render("/login", { error: "username or password wrong" });
  }


  const matchPassord = await bcrypt.compare(password, user.password);
  // console.log(matchPassord);
  res.redirect('back')
  if (matchPassord) {
    req.id = user._id;
    res.render('/')
  }


};

module.exports.loginUser = loginUser;
module.exports.createUser = createUser;
