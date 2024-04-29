const express = require('express')
const router =  express.Router()
const {createmodel,updatemodel,deleatmodel,findbyid,find} =  require('../controllers/hotelctrl')

 // create
 router.post("/",createmodel)

 //update
 router.put('/:id',updatemodel)

 //deleat
 router.delete('/:id',deleatmodel)

 //get
 router.get('/:id',findbyid)

 //getall
 router.get('/',find)

module.exports = router