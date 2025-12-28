// controllers/pets.js
//requir the model
const Pet = require('../models/pet.js');

//require express
const express = require('express')

//initialize the router
const router =express.Router();


//create a new ..post/pets/
router.post('/',async (req,res)=>{
    try{
        console.log('error')
        const pet = await Pet.create(req.body);
        res.status(201).json({pet}) //same as res.render وتلرجع لنا اوبجكت 
        //201 means created .. 200 means sucss 
    }catch(error){
        res.status(500).json({error:"fail to create pet"}) // 500 means error
    }
})

//export the router
module.exports =router;

