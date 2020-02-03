// Your server.js file should require the basic npm packages we've used in class: express and path.

var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});