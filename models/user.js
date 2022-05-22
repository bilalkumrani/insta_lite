const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrpt = require('bcrypt')
const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    image: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


userSchema.pre("save", function (next) {
    console.log(this.user);
    const user = this;
    console.log("pre user", user);

    bcrpt.hash(this.password, 10, (error, hash) => {
        if (error) next(error)
        user.password = hash;
        next();
    })

});


const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
