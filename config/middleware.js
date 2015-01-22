module.exports = function(app){
  app.use('/chat', function(req, res, next){
    if(!req.user){ return res.redirect('/'); }

    next();
  }); 
};
