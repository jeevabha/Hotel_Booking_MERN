const mongoose =  require('mongoose')

const userschema =  new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    featured:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{timestamps:true})


const usermodel = mongoose.model('User',userschema)

module.exports = usermodel