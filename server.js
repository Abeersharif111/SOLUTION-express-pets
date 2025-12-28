//.dotenv
const dotenv = require('dotenv');
dotenv.config();

//initialize the express
const express = require('express');
const app = express();

//.mongoose
const mongoose = require('mongoose');
const morgan = require('morgan');
const logger = require('morgan');    //middleware
//connect mongoose
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


//middleware

app.use(express.json());
app.use(logger('dev')); // same as app.use(morgan("dev"))


//controllers
const petCtrl = require("./controllers/pets")

// Routes go here.. لازم تكون هني تحت الكونترولرز و الاكسبرس
//routers
app.use('/pets',petCtrl);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
