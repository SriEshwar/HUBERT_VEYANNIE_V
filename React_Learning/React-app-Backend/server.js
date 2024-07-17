const express = require('express')
const mongoose = require('mongoose');
const User = require('./Models/users.model')

const app = express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello World from api')
});

app.post('/users',async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect('mongodb://localhost:27017/React-Learning')
.then(()=>{
    console.log('connected to database');
    app.listen(3000, ()=>{
        console.log('server running at 3000');
    });
}).catch(()=>{
    console.log("connection failed");
})