var HomeController = require('../controllers/home_controller');

module.exports = function(app) {

  app.get('/', HomeController.index);

};
