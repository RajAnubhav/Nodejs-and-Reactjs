const mongoose = require('mongoose');
const User = new mongoose.Schema({
    name:{type:String, required: true},
    class:{type:String}
    
},
{collection:'test4'},
)
const model =  mongoose.model('ModelName', User);

module.exports = model