

const Post = require('../models/post');

const home = async (req, res) => {

  const posts = await Post.find().populate('createdby');
  console.log(posts);

  return res.render("home", { posts });
};

const signup = (req, res) => {
  return res.render("signup");
};

const login = (req, res) => {
  return res.render("login");
};
exports.post = (req, res) => {

  return res.render("post")
}

module.exports.home = home;
module.exports.signup = signup;
module.exports.login = login;
