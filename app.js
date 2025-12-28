require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) =>{
    console.log(error)
})
db.once('open', ()=>{
    console.log("Connected to Database")
})

// Middleware to parse JSON request bodies
app.use(express.json())

// const medicineRouter = require('./routes/medicine')
// app.use('/medikiosk', medicineRouter)

const getRouter = require('./routes/getRequests')
app.use('/Medikiosk', getRouter)

const postRouter = require('./routes/postRequests')
app.use('/Medikiosk', postRouter)

const updateRouter = require('./routes/updateRequests')
app.use('/Medikiosk', updateRouter)

const deleteRouter = require('./routes/deleteRequests')
app.use('/Medikiosk', deleteRouter)

app.listen(4000, ()=>{
    console.log("Server Started")
})