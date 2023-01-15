const getRecords = require("./getRecords");
const createRecord = require("./createRecord");
const updateItem = require("./updateRecord");
const deleteRecord = require("./deleteRecord");

module.exports = {
  getRecords: getRecords,
  createRecord: createRecord,
  updateRecord: updateItem,
  deleteRecord: deleteRecord,
};
