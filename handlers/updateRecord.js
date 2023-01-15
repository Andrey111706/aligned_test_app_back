const { ObjectId } = require("mongodb");
const { getRecords } = require("../database");

module.exports = async (req, res) => {
  const collection = getRecords();
  const { url, name, type, youtubeId } = req.body;
  const { _id } = req.params;
  const result = await collection.updateOne(
    { _id: ObjectId(_id) },
    { $set: { name, type, url, youtubeId } }
  );
  res.send(result);
};
