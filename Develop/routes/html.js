
// Dependencies
// =============================================================
const router = require("express").Router();
const Workout = require("../models/workout.js");
var path = require("path");


// Routes
//gets the exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

 // get the stats page
 router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

// returns the index
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});


//export the router
module.exports = router;