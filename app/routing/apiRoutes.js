// Your apiRoutes.js file should contain two routes:
var friends = require("/friends.js")
module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // GET method route
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    // POST method route
    app.post('/api/friends', function (req, res) {
        // res.send('POST request survey results')
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User score: " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Best match " + bestMatch.friendDifference);

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Difference " + totalDifference);
            console.log("Best Match " + bestMatch.friendDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + "Total Difference");
        };

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);
    });
};