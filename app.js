require('dotenv').config()

var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var path = require('path');
var port = 8888;

app.set('port', port)

var api_key = process.env.API_KEY;

app.get("/hello", function(request, response) {
    return response.json({ "Hello" : "Trent" });
})

function checkCrypto() {
    console.log("Hello");
}

function run() {
    setInterval(checkCrypto, 10000);
}


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
  console.log("API Key:" + api_key);
  run();
})
