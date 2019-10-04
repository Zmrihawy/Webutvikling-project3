const express = require("express");
const bodyParser = require("body-parser");

const example = require("./example/example.js");
const componentRoute = require("./endpoints/component/componentRoute.js");

const app = express();
const port = 3000;
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

app.use("/example", example);
app.use("/component", componentRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
