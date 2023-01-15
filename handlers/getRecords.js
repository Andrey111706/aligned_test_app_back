const { getRecords: getRecords } = require("../database");

module.exports = async (req, res) => {
  const collection = getRecords();
  const collectionArray = await (await collection.find({})).toArray();
  res.send(collectionArray);
};
