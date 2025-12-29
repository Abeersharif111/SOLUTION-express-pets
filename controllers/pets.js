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

// READ - GET -(index) /pets - GET+/pets
router.get('/', async (req, res) => {
  // Setting up for our code
  try{
    const pets =await Pet.find({});
    res.status(200).json({pets})

  }catch(error){
    console.log(error)
    res.status(500).json({error:"fail to get pets"})
  }
});

// show route for one record :id -GET+/pets/123
router.get('/:id',async(req,res)=>{
    try{
        //git the id from the param then find-by id
        // if we dont get a pet respond with 404 else send 200 with pet
         const {id} =req.params
         const pet = await Pet.findById(id)
         if(!pet){  // if there is no pet wich is null 
         res.status(404).json({error:'pet not found'})
         }else{
          res.status(200).json({pet})
         }
    }catch(error){
        console.log(error)
        res.status(500).json({error:'faild to get a pet'})
    }
})

//delete apet -DEL+/pets/123
router.delete('/:id',async(req,res)=>{
    try{
      
        const {id} =req.params // get the id from params
        const pet = await Pet.findByIdAndDelete(id)  //try to find and delete the pet using the id
        if(!pet){      //if there is no pet(not null wich is true), send 404
            res.status(404).json({error:"Pet not found"})
        }else{         //else send back a msg ssys deleted
            res.status(200).json({pet}) //204 most pouler for deleting it means deleted and no data will be send- json send the pet
        }
        
         }
    catch(error){
        console.log(error)
        res.status(500).json({error:'faild to get a pet'})
    }
})


//updating - PUT + /pets/123
router.put('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
         const pet = await Pet.findByIdAndUpdate(id,req.body,{new:true})
         if(!pet){
            res.status(404).json({error:"pet not found"})
         }else{
            res.status(200).json({pet})
         }
    }catch(error){
        console.log(error)
        res.status(500),json({error:"faild to update"})
    }
})

//export the router
module.exports =router;

