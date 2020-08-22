const router = require("express").Router();
const Workout = require("../models/workout.js");

//add a workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
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

// add an exercise by id
router.put("/api/workouts/:id", (req, res) => {
  Workout.findById(req.params.id)
      .then(function (workout) {
          res.send(workout)
      })
      .catch(function (err) {
          if (err) throw err
      });
});

//get a range of workouts
router.get("/api/workouts/range", function (req, res) {
  Workout.find({}) //get all the workouts
    .then(() => {
      res.send(workout);
    })
    .catch(err => {
      res.status(400).json(err); //bad request
    })
});

//export our router
module.exports = router;