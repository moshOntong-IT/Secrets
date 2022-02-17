require("dotenv").config();
const mongoose = require("mongoose");
const passportMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

userSchema.plugin(passportMongoose);

module.exports = {
    userSchema,
};

module.exports = mongoose.model("User", userSchema);