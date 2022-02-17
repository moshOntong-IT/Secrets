const express = require("express");
const User = require("../../models/userSchema.js");

const registerRouter = express.Router();

registerRouter
    .route("/")
    .get((req, res) => {
        res.render("register");
    })
    .post((req, res) => {});

module.exports = registerRouter;