const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age :{
        type : Number,
        required : true,
    },
    email : {
        type : String,
        unique : true,
       
    },
    mobile : {
        type : String,

    },
    address : {
        type : String,
    },
    aadharCardNumber : {
        type : Number,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['admin','voter'],
        default : 'voter'
    },
    isVoted : {
        type : Boolean,
        default : false,
    }

});

const User = mongoose.model('user', userSchema);
module.exports = User;