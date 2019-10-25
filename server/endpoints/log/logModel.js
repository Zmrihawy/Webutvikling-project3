var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var logSchema = new Schema({
  nameSearch: {
    type: String,
  },
  pageNum: {
    type: String,
  },
  objectsPerPage: {
    type: String,
  },
  sortBy: {
    type: String,
  },
  isAsc: {
    type: String,
  },
  filterField: {
    type: String
  },
  filterVal: {
    type: String
  },
  resultComponents: [
  {
    type: Schema.Types.ObjectId,
    ref: "component"
  }
  ]
});

module.exports = mongoose.model("log", logSchema);
