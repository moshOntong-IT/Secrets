const express = require("express");
const User = require("../../models/userSchema.js");
const bcrypt = require("bcrypt");
const passport = require("passport");

const loginRouter = express.Router();

loginRouter
    .route("/")
    .get((req, res) => {
        res.render("login");
    })
    .post(async(req, res) => {
        const { username, password } = req.body;
        const user = User({
            username: username,
            password: password,
        });

        req.login(user, (err) => {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/secrets");
                });
            }
        });
    });

module.exports = loginRouter;