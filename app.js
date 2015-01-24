var express       = require('express'),
path              = require('path'),
favicon           = require('serve-favicon'),
logger            = require('morgan'),
cookieParser      = require('cookie-parser'),
bodyParser        = require('body-parser'),
passport          = require('passport'),
FacebookStrategy  = require('passport-facebook').Strategy,
config            = require('config'),
session           = require('express-session'),
RedisStore        = require('connect-redis')(session),
mongoose          = require('mongoose'),
app               = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store: new RedisStore(),
    secret: 'node chat application',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Setup all middlware validations
require('./config/middleware')(app);

require('./config/passport')(passport, FacebookStrategy, config);
require('./config/routes')(app, passport);
require('./config/database')(mongoose, config);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
