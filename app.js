
const express = require("express")
require('dotenv').config({ quiet: true });
const connectDB = require("./config/db");
const PORT = process.env.PORT
console.log("PORT.............",{PORT,connectDB})

const app = express();

connectDB();

app.use(express.json());

require("./listeners/emailListener");
require("./listeners/smsListener");
require("./listeners/analyticsListener");

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server Running");
});
