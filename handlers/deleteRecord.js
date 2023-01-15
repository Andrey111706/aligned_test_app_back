const { ObjectId } = require("mongodb");
const { getRecords } = require("../database");

module.exports = async (req, res) => {
  const collection = getRecords();
  const { _id } = req.params;
  const result = await collection.deleteOne({ _id: ObjectId(_id) });
  res.send(result);
};
