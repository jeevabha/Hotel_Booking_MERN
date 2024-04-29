const Hotelmodel = require('../Models/hotelmodel')


const createmodel = (async(req,res,next)=>{
    const newmodel =  new Hotelmodel(req.body)
    try {
        const savemodel = await newmodel.save()
        res.status(200).json(savemodel)
    } catch (err) {
        res.status(500).json('not')
    }
})
const updatemodel = (async(req,res,next)=>{
    try {
        const updatemodel = await Hotelmodel.findByIdAndUpdate(req.params.id,
        {$set:req.body},{new:true})
        res.status(200).json(updatemodel)
    } catch (err) {
        next(err)
    }
})
const deleatmodel = (async(req,res,next)=>{
    try {
        const deleatmodel = await Hotelmodel.findByIdAndDelete(req.params.id)
        res.status(200).json('hotel has deleated')
    } catch (err) {
        next(err)
    }
})
const findbyid = (async(req,res,next)=>{
    try {
        const findbyid = await Hotelmodel.findById(req.params.id)
        res.status(200).json(findbyid)
    } catch (err) {
        next(err)
    }
})
const find = (async(req,res,next)=>{
    try {
        const find = await Hotelmodel.find()
        res.status(200).json(find)
    } catch (err) {
       next(err)
    }
})


module.exports = {createmodel,updatemodel,deleatmodel,findbyid,find} 