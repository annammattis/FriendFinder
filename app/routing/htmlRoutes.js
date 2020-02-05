// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
var path = require("path");

module.export(function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/public/survey.html"));
    });
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/home.html"));
    });
});
    // A default, catch-all route that leads to home.html which displays the home page.