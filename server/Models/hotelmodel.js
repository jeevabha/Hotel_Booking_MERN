const mongoose =  require('mongoose')

const Hotelschema =  new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    distance:{
        type:Number,
        require:true
    },
    photo:{
        type:[String],
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        require:true
    },
    featured:{
        type:String,
        default:false
    },
})


const Hotelmodel = mongoose.model('Hotel',Hotelschema)

module.exports = Hotelmodel