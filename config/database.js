module.exports = function(mongoose, config){
  mongoose.connect('mongodb://' + config.get('database.host') + '/'+ config.get('database.database'), function(err, res){
    if(err){
      console.log(err);
    }
  });
};
