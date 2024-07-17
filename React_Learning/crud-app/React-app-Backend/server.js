const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/users.model')

const app = express()
app.use(express.json())
app.use(cors());


app.get('/', (req,res)=>{
    res.send('Hello World from api')
});

app.get('/users', async(req,res)=>{
    try {
        const user = await User.find({});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/users/:id', async(req,res)=>{
    try {
        const{id} = req.params;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/users',async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.put('/users/:id', async(req,res)=>{
    try {
        const{id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)

        if(!user){
            return res.status(404).json({message: "User does not exist"})
        }
        const updatedUser = await User.findById(id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/users/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({message: "User does not exist"})
        }
        res.status(200).json({message: "User deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb://localhost:27017/React-Learning')
.then(()=>{
    console.log('connected to database');
    app.listen(4200, ()=>{
        console.log('server running at 4200');
    });
}).catch(()=>{
    console.log("connection failed");
})