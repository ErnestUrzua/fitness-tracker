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


const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;