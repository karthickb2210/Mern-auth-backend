const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
// database connection 
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{
    console.log("error",err)
})

app.use('/',require('./Routes/authRoutes'))
const port = 8000;
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})