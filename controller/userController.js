
const User = require('../models/user');


export const createUser = async (req, res) => {

    const { name, userName, email, password } = req.body
    if (!name || !userName || !email || !password) {
        return res.render('/login')
    }
    const user = await User.create(req.body)
    return res.render('/');
}

const loginUser = (req, res) => {

    const { username, password } = req.body;
    const user = await User.findOne(username);
    if (!user) {
        res.render('/login', { error: "username or password wrong" })
    }

}