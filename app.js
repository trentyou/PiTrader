var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var path = require('path');


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
