'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser    = require('body-parser');
var multer        = require('multer'); 
var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose      = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/GameMasterScreenDB');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/favicon.ico', (req, res) => res.status(204));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
multer();
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const diceRoutes = require('./services/dice.service.server');
app.use('/dice', diceRoutes);

const enemyRoutes = require('./services/enemy.service.server');
app.use('/enemy', enemyRoutes);

const namesRoutes = require('./services/names.service.server')
app.use('/names', namesRoutes);

const sessionPlanRoutes = require('./services/sessionPlan.service.server');
app.use('/sessionPlan', sessionPlanRoutes);

const weaponsRoutes = require('./services/weapons.service.server');
app.use('/weapons', weaponsRoutes);

const charactersRouter = require('./services/characterSheet.service.server');
app.use('/characters', charactersRouter);

module.exports = app;

