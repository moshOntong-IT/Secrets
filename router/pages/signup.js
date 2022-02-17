const express = require("express");
const User = require("../../models/userSchema.js");

const registerRouter = express.Router();
const bcrypt = require("bcrypt");

const saltRounds = 10;

registerRouter
    .route("/")
    .get((req, res) => {
        res.render("register");
    })
    .post((req, res) => {
        const { username, password } = req.body;
        // console.log(username + " " + password);

        bcrypt.hash(password, saltRounds, function(hashErr, hash) {
            User.create({ email: username, password: hash }, (err, result) => {
                // console.log(result);
                if (!err) {
                    console.log("Successfully, register user");
                    res.render("secrets");
                } else {
                    console.log(err.message);
                }
            });
        });
    });

module.exports = registerRouter;