const home = (req, res) => {
  return res.render("home");
};

const signup = (req, res) => {
  return res.render("signup");
};

const login = (req, res) => {
  return res.render("login");
};
module.exports.home = home;
module.exports.signup = signup;
module.exports.login = login;
