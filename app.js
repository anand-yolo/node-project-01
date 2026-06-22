const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("main file hit")
  res.send("Hello from how anand new change Node.js!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at 3000 port ${PORT}`);
});