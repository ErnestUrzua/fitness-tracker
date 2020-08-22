const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  //todo
  // /api/workouts/range
  router.get("/api/workouts/range", function(req,res){
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