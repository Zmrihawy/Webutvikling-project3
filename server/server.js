const express = require("express");
const bodyParser = require("body-parser");

const componentRoute = require("./endpoints/component/componentRoute.js");
const userRoute = require("./endpoints/user/userRoute.js");
const logRoute = require("./endpoints/log/logRoute.js");

const app = express();
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

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
