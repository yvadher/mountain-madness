var express   = require('express');
var config  = require('./config');
var http      = require('http');
var util      = require('util');
var path = require('path');
var async = require('async');
var colors  = require('colors');
var cors = require('cors');

console.log(('Server time: ').yellow, (new Date()).toString());
require('log-timestamp')(function() { return '[' + new Date() + '] %s' });

let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));

var services = require('./services/services');

const API_KEY = '24431d0e56632af62a7e1891d23a0fd9'
const API_URL = `https://api.darksky.net/forecast/${API_KEY}`

app.get('/api/getData', function(req,res){

		

});


app.get('*', function(req, res) {
	console.log("Sending the index.html");
    res.status(200).sendFile(path.resolve('public/index.html'));
});


app.set('port', (process.env.PORT || 5000));

//MARK::::: HEROKU does not listen in any other port than 5000
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
