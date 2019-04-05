
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
// const { google } = require('googleapis')
var indexRouter = require('./routes/index');
const ocdRouter = require('./routes/ocd')

var app = express();

// function loadClient() {
//   google.client.setApiKey('AIzaSyBUzALt9JiIgS3sJPgUwEP__B16u0Gglus')
//   return google.client.load("https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest")
//     .then(function () { console.log("google client loaded for API"); },
//       function (err) { console.error("Error loading google client for API", err); });
// }
// loadClient()
// google.load("client");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/elections', indexRouter);

app.use('/ocd', ocdRouter)

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
