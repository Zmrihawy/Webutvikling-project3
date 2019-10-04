const express = require("express");
const router = express.Router();

// This is run on each hit
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// ROUTE: /birds
router.get("/", function(req, res) {
  res.send("Example home page");
});

// ROUTE: /birds/about
router.get("/about", function(req, res) {
  res.send("About example");
});

module.exports = router;
