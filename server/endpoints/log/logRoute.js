const express = require("express");
const logModel = require("./logModel.js");
const router = express.Router();

// TYPE: GET
// ROUTE: /log
// DESC: Get request to get all logs
router.get("/", function(req, res) {
  logModel
    .find()
    .then(logs => res.send(logs))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

// TYPE: GET
// ROUTE: /log/statistics
// DESC: Get various statistics of logs. Used for data viz
router.get("/statistics", function(req, res) {
  logModel.find().populate("resultComponents")
    .then((logs) => {
      let statisticsCount = {};
      logs.forEach((log) => {
        if (log.nameSearch) {
          statisticsCount[log.nameSearch] = statisticsCount[log.nameSearch] ? statisticsCount[log.nameSearch] + 1 : 1;
        }
        if (log.filterVal) {
          statisticsCount[log.filterVal] = statisticsCount[log.filterVal] ? statisticsCount[log.filterVal] + 1 : 1;
        }
      })
      res.send(statisticsCount);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
})

module.exports = router;
