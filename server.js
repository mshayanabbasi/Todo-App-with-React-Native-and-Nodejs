const express = require("express");
require("./api/db/mongoose");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Todo Server is up on port " + port);
});