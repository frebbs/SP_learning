const { MongoClient } = require('mongodb');
const fs = require('fs');

const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function collectionExists(db, collectionName) {
    const collections = await db.listCollections().toArray();
    return collections.some((coll) => coll.name === collectionName);
}
async function seedDatabase() {
    try {
        await client.connect();

        const database = client.db('sp_learning');
        const collectionName = 'users';

        if (await collectionExists(database, collectionName)) {
            const result = await database.collection(collectionName).countDocuments()

            await database.collection(collectionName).drop();
            console.log(`${result} documents deleted from collection.`)
        }
        await database.createCollection('users');

        const data = fs.readFileSync('userSeedData.json', 'utf8');
        const docs = JSON.parse(data);

        const result = await database.collection(collectionName).insertMany(docs);
        console.log(`${result.insertedCount} documents inserted into collection.`);


    } finally {
        await client.close();
    }
}


seedDatabase()
    .catch(err => console.error(err));
