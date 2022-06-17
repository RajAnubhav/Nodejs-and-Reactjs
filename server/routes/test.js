var express = require('express');
var router = express.Router();
// connecting with mongodb using mongoose
const mongoose = require('mongoose');

const User = require('../models/user.model');
/* GET users listing. */
router.get('/', async (req, res, next) =>{
    await mongoose.connect('mongodb://localhost:27017/anubhav');
    User.find({},(err,docs)=>{
       res.json(docs)
    })
});


// POST request ke codes
router.post('/', async (req, res, next)=>{
    await mongoose.connect('mongodb://localhost:27017/anubhav');
    try{
        await User.create({
            name:req.body.name,
            class:req.body.class
        })

        res.json({
            status:"ok"
        })
    }
    catch(error){
        res.json({
            status: "Error"
        })
    }
});



module.exports = router;
