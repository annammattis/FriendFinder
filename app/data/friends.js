// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
// }

var friends = [
    {
        "name": "Livvy",
        "photo": "URL",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        "name": "Marie",
        "photo": "URL",
        "scores": [5, 2, 4, 5, 5, 2, 2, 4, 4, 2]
    },
    {
        "name": "Hannah",
        "photo": "URL",
        "scores": [6, 1, 3, 4, 6, 1, 3, 5, 5, 1]
    },
    {
        "name": "Brenda",
        "photo": "URL",
        "scores": [6, 2, 4, 3, 5, 2, 2, 4, 4, 2]
    },
    {
        "name": "Jamie",
        "photo": "URL",
        "scores": [7, 1, 5, 4, 6, 1, 1, 5, 3, 1]
    },
    {
        "name": "Chelsea",
        "photo": "URL",
        "scores": [7, 2, 4, 3, 5, 2, 2, 6, 4, 2]
    },
    {
        "name": "Alex",
        "photo": "URL",
        "scores": [8, 7, 1, 6, 2, 8, 7, 3, 4, 1]
    },
    {
        "name": "Liz",
        "photo": "URL",
        "scores": [8, 9, 5, 1, 9, 6, 8, 2, 6, 7]
    },
    {
        "name": "Kendall",
        "photo": "URL",
        "scores": [9, 2, 3, 7, 2, 6, 3, 4, 3, 8]
    },
    {
        "name": "Dana",
        "photo": "URL",
        "scores": [9, 1, 4, 8, 1, 9, 7, 6, 1, 8]
    },
    {
        "name": "Kate",
        "photo": "URL",
        "scores": [1, 9, 3, 6, 2, 6, 3, 4, 7, 8]
    },
    {
        "name": "Sam",
        "photo": "URL",
        "scores": [4, 6, 8, 3, 1, 3, 5, 7, 9, 3]
    },
    {
        "name": "Andrew",
        "photo": "URL",
        "scores": [4, 5, 7, 9, 5, 4, 3, 6, 8, 1]
    },
    {
        "name": "Jake",
        "photo": "URL",
        "scores": [1, 3, 5, 7, 9, 6, 4, 3, 6, 2]
    },
    {
        "name": "Dan",
        "photo": "URL",
        "scores": [2, 3, 6, 8, 9, 5, 3, 5, 2, 5]
    },
    {
        "name": "Gavin",
        "photo": "URL",
        "scores": [2, 4, 6, 7, 8, 9, 3, 1, 3, 5]
    },
    {
        "name": "Adam",
        "photo": "URL",
        "scores": [9, 7, 5, 4, 3, 2, 5, 2, 6, 2]
    },
    {
        "name": "Chris",
        "photo": "URL",
        "scores": [8, 5, 3, 2, 5, 2, 5, 1, 6, 1]
    },
    {
        "name": "Kitt",
        "photo": "URL",
        "scores": [9, 5, 4, 7, 3, 7, 2, 1, 3, 8]
    },
    {
        "name": "Connor",
        "photo": "URL",
        "scores": [1, 4, 6, 8, 9, 5, 3, 2, 2, 5]
    },
    {
        "name": "Scott",
        "photo": "URL",
        "scores": [3, 5, 7, 9, 4, 1, 4, 8, 3, 5]
    },
    {
        "name": "Luke",
        "photo": "URL",
        "scores": [4, 5, 2, 6, 1, 6, 3, 7, 8, 4]
    }
];

module.export(friends);

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5




// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.