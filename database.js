const { MongoClient }= require('mongodb');
var url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

  async function main() {
    await client.connect();
    // console.log('Connected successfully to server');
    const db = client.db("Heroes");
    const collection = db.collection('Heroes');
    const findResult = await collection.find({}).toArray();
    return findResult;
  }

  async function addHero(heroName)
  {
    await client.connect();
    const db = client.db("Heroes");
    const collection = db.collection('Heroes');
    var id=parseInt(Math.random()*100);
    var result = await collection.insertOne({id:id,name:heroName})
    console.log("re,res", result)
    if(result?.insertedId) {
      return true;
    }
    else
    return false 
  }
  async function deleteHero(heroId)
  {
    await client.connect();
    const db = client.db("Heroes");
    const collection = db.collection('Heroes');
    let res = await collection.deleteOne({id:parseInt( heroId)});
    console.log("really deleted: ", res)
    return res;
  }
  module.exports ={
    main,
    addHero,
    deleteHero
  }

  // deleteHero(15)