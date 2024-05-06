var mongoClient = require('mongodb').MongoClient
var uri = "mongodb://localhost:27017/"
var dbname = "employee"

console.log(uri+dbname)

mongoClient.connect(uri+dbname, function(connectError, connectEstablished){
    if(connectError){
        console.log("error in connecting db "+ connectError)
    }else{
        console.log("Connection established sucessfully")
    }
})