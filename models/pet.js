//requir mogose library
const mongoose=require('mongoose');

//creat the mongoose schema
const petShema = new mongoose.Schema({
     name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: String,
})

//initialize the mogose model
const Pet = mongoose.model('Pet',petShema)

//export the model
module.exports = Pet;

