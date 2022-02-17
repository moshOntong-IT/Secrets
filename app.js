//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loginRouter = require("./router/pages/login.js");
const registerRouter = require("./router/pages/signup.js");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportMongoose = require("passport-local-mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "Our little secret.",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

//router
app.use("/login", loginRouter);
app.use("/register", registerRouter);

main();

app.get("/", (req, res) => {
    res.render("home");
});

app.listen("3000", () => {
    console.log("Server app listen to 3000");
});

async function main() {
    await mongoose.connect("mongodb://localhost:27017/userDB");
}