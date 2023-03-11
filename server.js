require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static
app.use(express.static("public"));

// EJS Templates
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
