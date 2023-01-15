const { getRecords } = require("../database");

module.exports = async (req, res) => {
  const collection = getRecords();
  const { url, name, type, youtubeId } = req.body;
  const result = await collection.insertOne({ url, name, type, youtubeId });
  res.send(result);
};
