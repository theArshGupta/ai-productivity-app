const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/test", (req, res) => {
  res.send("TEST PAGE");
});

app.listen(3000, () => {
  console.log("Server started on 3000");
});
