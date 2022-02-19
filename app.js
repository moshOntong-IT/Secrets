//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loginRouter = require("./router/pages/login.js");
const registerRouter = require("./router/pages/signup.js");
const secretRouter = require("./router/pages/secrets.js");
const logoutRouter = require("./router/pages/logout.js");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const User = require("./models/userSchema.js");

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

main();

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//router
app.use("/secrets", secretRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/logout", logoutRouter);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen("3000", () => {
    console.log("Server app listen to 3000");
});

async function main() {
    await mongoose.connect("mongodb://localhost:27017/userDB");
}