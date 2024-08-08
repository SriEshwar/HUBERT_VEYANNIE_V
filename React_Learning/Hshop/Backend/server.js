const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const PORT = 8000
const products = require('./Routes/product')
const orders = require('./Routes/order')
const users = require('./Routes/user')

app.use(express.json())
app.use(cors())

app.use('/',products)
app.use('/',orders)
app.use('/',users)

mongoose.connect('mongodb://localhost:27017/Hshop-React')
.then(()=>{
    console.log("Connected to database");
    app.listen(PORT, ()=>{
        console.log(`Server running at port ${PORT}`);
    })
}).catch(()=>{
    console.log("Error connecting with databace");
})