const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const componentRoute = require("./endpoints/component/componentRoute.js");
const userRoute = require("./endpoints/user/userRoute.js");
const logRoute = require("./endpoints/log/logRoute.js");

const app = express();
app.use(express.static(path.join(__dirname, "../client/build")));
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect("mongodb://AppUser:MilkShake@it2810-30.idi.ntnu.no/db01", {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Succesfully connected to mongodb server");
});

app.use("/api/component", componentRoute);
app.use("/api/user", userRoute);
app.use("/api/log", logRoute);

app.get("*", (req, res) => {
  console.log("serving");
  console.log(__dirname);
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
