const express = require('express')
const connection  = require('../server/connection/connection')
const dotenv =  require('dotenv').config()
const authRoute  = require('./Routes/authRoute')
const authHotel  = require('./Routes/hotelRoute')

const app = express()
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/hotels',authHotel)
// app.use('/api/users',usersRoute)
// app.use('/api/rooms',roomsRoute)



app.listen( process.env.PORT, ()=>{
    connection()
    console.log(`connected Port ${process.env.PORT}`);
})