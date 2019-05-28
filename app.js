var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kvizRouter = require('./routes/kviz');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//defoltno nije radilo
//app.use(express.static(path.join(__dirname, 'public')));

//dodao sa stackoverflowa ali ne radi
// app.use('/img',express.static(path.join(__dirname, 'public/images')));
// app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
// app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));
//Static request example:
//pruebaexpress.lite.c9.io/js/socket.io.js

//OVO RADI ALI NECU OVAKO
// app.use(express.static('public/javascript'));

app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kviz', kvizRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
