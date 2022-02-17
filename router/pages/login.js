const express = require("express");
const User = require("../../models/userSchema.js");
const bcrypt = require("bcrypt");

const loginRouter = express.Router();

loginRouter
    .route("/")
    .get((req, res) => {
        res.render("login");
    })
    .post(async(req, res) => {
        const { username, password } = req.body;
        // console.log(username + " " + password);
        // console.log(await User.findOne({ email: username }));

        User.findOne({ email: username }, {}, {}, (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                if (result) {
                    bcrypt.compare(
                        password,
                        result.password,
                        function(hashErr, hashResult) {
                            if (hashResult === true) {
                                res.render("secrets");
                            } else {
                                console.log(hashErr.message);
                                res.redirect("/login");
                            }
                        }
                    );
                } else {
                    console.log("Not registered yet");
                    res.redirect("/login");
                }
            }
        });
    });

module.exports = loginRouter;