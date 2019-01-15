var express = require('express');
var app = express();
var port = process.env.PORT || 3020;
var route = require('./route');
const pjson = require('./package.json')

app.use('/',route);

app.listen(port, function() {
	console.log(pjson.name + ': Server started on port: ' + port);
});