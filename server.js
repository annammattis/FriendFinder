// Your server.js file should require the basic npm packages we've used in class: express and path.
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});