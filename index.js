const express = require("express");
const bodyParser = require("body-parser");

const {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("./handlers");
const { init } = require("./database");

const app = express();
const port = 3001;

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:3000"];
  if (allowedOrigins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(bodyParser.json());

app.get(`/items`, getRecords);
app.put(`/item/:_id`, updateRecord);
app.post(`/item`, createRecord);
app.delete(`/item/:_id`, deleteRecord);

app.listen(port, () => {
  console.log(`Local server are listening on port ${port}`);
});

(async () => {
  await init();
})();
