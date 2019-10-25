var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  shoppingCart: [
    {
      type: Schema.Types.ObjectId,
      ref: "component"
    }
  ]
});

module.exports = mongoose.model("userSchema", userSchema);
