const express = require("express");
const User = require("../../models/userSchema.js");
const bcrypt = require("bcrypt");

const loginRouter = express.Router();

loginRouter
    .route("/")
    .get((req, res) => {
        res.render("login");
    })
    .post(async(req, res) => {});

module.exports = loginRouter;