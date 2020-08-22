const router = require("express").Router();
const Workout = require("../models/workout.js");

//add a workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
  console.log("posting workout: ", Workout)//not posting exercise
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// get workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// add an exercise by id and update exercises
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    { $push: { exercises: req.body } })
    //send back the data
    .then(workout => {
      res.send(workout)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get a range of workouts
router.get("/api/workouts/range", function (req, res) {
  Workout.find({}) //get all the workouts
    .then(workout => {
      res.send(workout);
    })
    .catch(err => {
      res.status(400).json(err); //bad request
    })
});

//export our router
module.exports = router;