var mongoose = require('mongoose'),
findOrCreate = require('mongoose-findorcreate');

module.exports = mongoose.model('User', new mongoose.Schema({

  name: {
    type: String,
    require: true
  },

  facebook_id: {
    type: String,
    require: true
  },

  profile_picture: {
    type: String,
    require: true
  },

  online: {
    type: Boolean,
    require: true
  }

})
.plugin(findOrCreate));
