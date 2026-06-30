require("dotenv").config();

const express = require("express")
const connectDB = require("./config/db");
const PORT = process.env.PORT

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
