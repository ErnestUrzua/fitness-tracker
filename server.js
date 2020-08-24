//required files express for server and mongoose for our db models
const express = require("express");
const mongoose = require("mongoose");


//our port we to listen to locally
const PORT = process.env.PORT || 3000;

//our server app
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allow our public folder to be statically served
app.use(express.static("public"));

//our mongo server 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// our required routes 
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));


app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
