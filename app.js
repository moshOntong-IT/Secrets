//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loginRouter = require("./router/pages/login.js");
const registerRouter = require("./router/pages/signup.js");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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