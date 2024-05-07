const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('employee')
        const collection = db.collection('employees')

        const cursor = collection.find({})
        const akresult = await collection.insertOne({
            _id: 7,
            firstName: 'Santosh',
            lastName: 'M',
            gender: 'male',
            email: 'santosh.m@abc.com',
            salary: 8000,
            department: { name: 'Developer' }
        })

        console.log('the inserted id ' + akresult.insertedId)

        await cursor.forEach(record => {
            console.log(record)
        })
        await client.close()
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();