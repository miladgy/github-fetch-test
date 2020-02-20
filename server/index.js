const express = require("express");
const http = require("http");
const PORT = process.env.NODE_ENV === "production" ? 80 : 5000;
const router = require("./router");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app
  .use(express.static(__dirname + "/public"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors())
  .use(router);

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
