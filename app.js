var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http'); // core module
var path = require('path'); // core module
var ejs = require('ejs');
// var production = (process.env.NODE_ENV === "production");

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
	// res.locals.production = production;
	next();
});

app.use('/', require('./routes/index'));

var port = process.env.PORT || 4455;
app.listen(port, function() {
	console.log('Server started on port '+ port);
});