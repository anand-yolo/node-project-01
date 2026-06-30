
const express = require("express")
require('dotenv').config({ quiet: true });
// const connectDB = require("./config/db");
const cron = require("node-cron")
const PORT = process.env.PORT
console.log("PORT.............",{PORT})

const app = express();
cron.schedule("*/10 * * * * *",()=>{
  console.log("i am in crone")
})

// connectDB();

app.use(express.json());
app.get("/test",async (req,res)=>{
  console.log("mmmmmmmmmmmmmmmmmmmmmmm")
  res.send("hello from server")
})

require("./listeners/emailListener");
require("./listeners/smsListener");
require("./listeners/analyticsListener");

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Server Running");
});
