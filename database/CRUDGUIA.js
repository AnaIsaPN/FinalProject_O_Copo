const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./db")

async function createDocument(user) {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.insertOne(user)
    return result
  }


async function createVariousDocument(users) { //users: array
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.insertMany([...users])
    console.log(result)
    return result
  }

//   createDocument({username: 'ABC', password: 'SampleProduct'})
//   .then((id) => console.log("Documento inserido com o id:", id))
// createDocument({username: 'BCD', password: 'SampleProduct2'})
//   .then((id) => console.log("Documento inserido com o id:", id))
// createDocument({username: 'ZZZ', password: 'SampleProduct2'})


async function readAll() {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.find().toArray()
    return result
  }

// readAll()


async function readById(id) {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.findOne({_id: new ObjectId(id)})
    return result
  }

// readByUser("6527bec4bbec5ca8ccd1ee9b")

  

async function updateById(id, data) {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data}, {upsert: true})
    // const result = await collection.updateMany({username: "ABC"}, {$set: username: "NovoNome"}, {upsert: true})
    return result.upsertedId
  }

//   updateById("6527bec4bbec5ca8ccd1ee9f", {username: "GHDSg", name: "das"})
  


  async function deleteById(id) {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    return result.deletedCount
  }

  deleteById("6527bec4bbec5ca8ccd1ee9f")




  async function deleteVarious() {
    const collection = await getMongoCollection("dbSite", "users")
    const result = await collection.deleteMany({username: "ABC"})
    return result.deletedCount
  }

  deleteVarious()