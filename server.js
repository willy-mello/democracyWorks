
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/elections', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.send(404);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(500);
  // res.render('error');
});
app.listen(8080, () => console.log('app is listening'))
module.exports = app;
