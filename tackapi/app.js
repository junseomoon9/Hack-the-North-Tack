var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var con = mysql.createConnection({
  host : 'localhost',
  port: '3306',
  user: 'root',
  password: 'tacktacktack',
  database: 'tack'
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var signUpRouter = require('./routes/signup');
const { compile } = require('morgan');

var app = express();

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + con.threadId);
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/signup', signUpRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

signUpRouter.post('/', function(req, res, next) {
  var user= req.body.user;
  var query = 'INSERT INTO users (id, firstN, lastN, email, pass) ' + 
    "VALUES ( 0, '" + user.firstN + "', '" + user.lastN + "', " + 
    mysql.escape(user.email) + ", '" + user.password + "')";

  con.query(query, function(err, results, fields) {
    if (err) {
      console.error('error: ' + err.stack);
      return;
    }
   
    console.log(results, fields);
  }
    
    );
  console.log(req.body.user);
});

app.post('/signup', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
})

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
