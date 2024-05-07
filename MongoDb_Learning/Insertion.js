const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Aspire')
        const collection = db.collection('practice')

        const cursor = collection.find({})
        // const akresult = await collection.insertOne({
        //     _id: 11,
        //     book: "Ugly Love",
        //     author: "Colleen Hoover",
        //     sales: 20000
        // })

        const akresult = await collection.insertMany([{
            _id: 12,
            book: "It starts with us",
            author: "Colleen Hoover",
            sales: 25000
        },{
            _id: 13,
            book: "It ends with us",
            author: "Colleen Hoover",
            sales: 30000
        }])

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