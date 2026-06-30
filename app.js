
const express = require("express")
require('dotenv').config({ quiet: true });
// const connectDB = require("./config/db");
const PORT = process.env.PORT
console.log("PORT.............",{PORT})

const app = express();

// connectDB();

app.use(express.json());
app.get("/test",async (req,res)=>{
  res.json("hello from server")
})

require("./listeners/emailListener");
require("./listeners/smsListener");
require("./listeners/analyticsListener");

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server Running");
});
