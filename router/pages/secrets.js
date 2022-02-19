const express = require("express");
const User = require("../../models/userSchema.js");
const secretsRoute = express.Router();

secretsRoute.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});

module.exports = secretsRoute;