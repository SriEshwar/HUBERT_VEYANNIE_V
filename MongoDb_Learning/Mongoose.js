const { Certificate } = require('crypto')
const mongoose = require('mongoose')

var Schema = mongoose.Schema


var skillschema = new Schema({
    skillName: String,
    Experiance: Number,
    proficiency: String
})

var jobseekerSchema = new Schema({
    jonseekerNAme: String,
    emailID : String,
    age: Number,
    Certified: Boolean,
    skills:[skillschema]
})

var candidate = mongoose.model("jobseeker", jobseekerSchema)
mongoose.connect("mongodb://localhost:27017/employee")

var jobseeker1 = new candidate({
    jobseekerNAme: 'Hubey',
    emailID: "hubertveyannie07@gmail.com",
    age: 21,
    Certified: true,
    skills: [{
        skillName: 'Java',
        Experiance: 2,
        proficiency: "Intermediate"
    },{
        skillName: 'Python',
        Experiance: 3,
        proficiency: "Intermediate"
    }]
})

jobseeker1.save()