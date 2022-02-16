require("dotenv").config();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

module.exports = {
    userSchema,
};

module.exports = mongoose.model("User", userSchema);