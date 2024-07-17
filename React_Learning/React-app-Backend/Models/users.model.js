const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    website:{
        type: String
    }
})

const Users = mongoose.model('User', UserSchema)
module.exports = Users