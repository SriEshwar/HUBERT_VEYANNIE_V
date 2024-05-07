const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Aspire')
        const collection = db.collection('practice')

        
    //update------------------------------------------------------------->

    // const queryOne = { author: "Paulo Coelho" };
    // const updateOne = { $set: { book: "Eleven Minutes" } };
    // const resultOne = await collection.updateOne(queryOne, updateOne);
    // console.log(`${resultOne.matchedCount} document matched, ${resultOne.modifiedCount} document modified`);
    

    // updateMany-------------------------------------------------------->
    //  const queryMany = { author: "Dan Brown" };
    //  const updateMany = { $set: { sales: 80000 }};
    //  const resultMany = await collection.updateMany(queryMany, updateMany);
    //  console.log(`${resultMany.matchedCount} document matched, ${resultMany.modifiedCount} document modified`);

    // Delete one document----------------------------------------------->
    // const queryDeleteOne = { author:"Colleen Hoover" };
    // const resultDeleteOne = await collection.deleteOne(queryDeleteOne);
    // console.log(`${resultDeleteOne.deletedCount} document deleted`);
    
    // Delete many documents--------------------------------------------->
    const queryDeleteMany = { author: "Colleen Hoover" }; // Delete documents where age is less than 25
    const resultDeleteMany = await collection.deleteMany(queryDeleteMany);
    console.log(`${resultDeleteMany.deletedCount} documents deleted`);

    
        const cursor = collection.find({})
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