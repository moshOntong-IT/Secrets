const express = require("express");
const User = require("../../models/userSchema.js");
const passport = require("passport");
const registerRouter = express.Router();

registerRouter
    .route("/")
    .get((req, res) => {
        res.render("register");
    })
    .post((req, res) => {
        const { username, password } = req.body;
        User.register({ username: username }, password, (err, user) => {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/secrets");
                });
            }
        });
    });

module.exports = registerRouter;