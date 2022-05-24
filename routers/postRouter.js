const express = require("express");
const path = require("path");
const { isAuthenticated } = require("../middleware/isAuthenticated.js");
const route = express.Router();
const Post = require('../models/post.js');

route.post('/post/create', isAuthenticated, async (req, res) => {

    console.log(req.files);
    console.log(req.body);
    // res.redirect("back")
    const img = req.files.img;
    img.mv(path.resolve(__dirname, '../assets/image', img.name), async (err) => {
        if (err) return res.redirect('back')

        console.log(req.body.decription);
        const data = {
            description: req.body.decription,
            comment: { total: 0, commentBy: [] },
            likes: { total: 0, likeBy: [], },
            image: img.name,
            createdby: req.user.id
        }
        const post = await Post.create(data)
        if (post) {
            return res.redirect('/')
        }
    })



})
module.exports = route