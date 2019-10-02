var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var componentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },

  specs: {
    type: [{
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }]
  }
});

module.exports = mongoose.model('component', componentSchema)
