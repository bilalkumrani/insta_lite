
const jwt = require('jsonwebtoken');
const User = require('../models/user')


exports.isAuthenticated = async (req, res, next) => {
    console.log("isAuthenticated");
    const { token } = req.cookies
    if (token === undefined) {
        return res.redirect('/login');
        // console.log({ token });
    }
    const _decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(_decoded);
    const user = await User.findById(_decoded.id)
    if (!user) {
        return res.render('login')
    }
    console.log(user);
    req.user = user
    next()
}