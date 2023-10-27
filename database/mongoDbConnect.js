const { MongoClient } = require('mongodb')

const url = "mongodb://127.0.0.1:27017"
const defaultDbName = "Copo"

let client = undefined

async function GetMongoClient() {
    if (!client) {
        try {
            client = new MongoClient(url)
            await client.connect()
        } catch (err) {
            console.log(err)
        }
    }
    return client
}

export async function GetCollection(dbName = defaultDbName, collectionName){
    const cli = await GetMongoClient()
    const db = cli.db(dbName)
    return db.collection(collectionName)
}

