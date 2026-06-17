const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from anand Node.js!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at 3000 port ${PORT}`);
});