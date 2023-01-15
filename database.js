const MongoClient = require("mongodb").MongoClient;
let database;

const init = async () => {
  const connectionString = "mongodb://127.0.0.1:27017";
  try {
    const client = await MongoClient.connect(connectionString);
    database = client.db("Aligned_test_collection");
  } catch (e) {
    console.log(e);
  }
  console.log("connect to database successful");
};

module.exports = {
  init,
  getRecords: () => database.collection("items"),
};
