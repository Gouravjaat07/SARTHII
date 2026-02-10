const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/sarthi", (req, res) => {
//     res.render("homepage.ejs");
// })

// Index Route
app.get("/sarthi", (req, res) => {
    res.render("mainpage.ejs");
})


// Home Route
app.get("/sarthi/homepage", (req, res) => {
    res.render("homepage.ejs");
})

// Login Route
app.get("/sarthi/login", (req, res) => {
    res.render("login.ejs");
})

// Signup Route
app.get("/sarthi/signup", (req, res) => {
    res.render("signup.ejs");
})

// Main Page
app.get("/sarthi/homepage", (req, res) => {
    res.render("homepage.ejs");
})

// Dashboard Route
app.get("/sarthi/profile", (req, res) => {
    res.render("profile.ejs");
})

// YT
app.get("/sarthi/yt-course", (req, res) => {
    res.render("yt_course.ejs");
})

// Goal
app.get("/sarthi/challenges", (req, res) => {
    res.render("goal_challenge.ejs");
})

// Mentorship
app.get("/sarthi/mentorship", (req, res) => {
    res.render("mentorship.ejs");
})

// Jobs
app.get("/sarthi/jobs", (req, res) => {
    res.render("jobs.ejs");
})

// Nearby academics
app.get("/sarthi/academics", (req, res) => {
    res.render("academics.ejs");
})

app.listen(port, () => {
    console.log("Server is listening");
})