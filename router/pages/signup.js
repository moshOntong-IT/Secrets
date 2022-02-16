const express = require("express");
const User = require("../../models/userSchema.js");

const registerRouter = express.Router();
const md5 = require("md5");

registerRouter
    .route("/")
    .get((req, res) => {
        res.render("register");
    })
    .post((req, res) => {
        const { username, password } = req.body;
        // console.log(username + " " + password);

        User.create({ email: username, password: md5(password) }, (err, result) => {
            // console.log(result);
            if (!err) {
                console.log("Successfully, register user");
            } else {
                console.log(err.message);
            }
        });

        res.render("secrets");
    });

module.exports = registerRouter;