// Your server.js file should require the basic npm packages we've used in class: express and path.
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});