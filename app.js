const express = require("express");
require("dotenv").config()
const app = express();


app.get("/", (req, res) => {
  console.log("main file hit",)

  res.send("Hello from how kkkanand new change Node.js!");
});
console.log(",,,,,,,,,,,,,,",process.env.PORT)
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at 3000 port ${PORT}`);
});