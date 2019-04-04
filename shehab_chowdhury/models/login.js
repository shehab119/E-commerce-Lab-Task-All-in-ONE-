var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  lid: {
    type: String,
    unique: true
  },
  lname: {
    type: String
  },
  lcom: {
    type: String
  }
    
});



module.exports = mongoose.model('index', batchSchema);
