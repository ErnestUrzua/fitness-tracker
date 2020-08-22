const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//example schema
// const ExampleSchema = new Schema({
//     string: {
//       type: String,
//       trim: true,
//       required: "String is Required"
//     }
//   });


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            distance: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number
            },
            exercise: {
                type: String,
                trim: true
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            }
        }],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;