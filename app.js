require("dotenv").config();

const express = require("express")
 require("./config/db");

const app = express();

connectDB();

app.use(express.json());

// require("./listeners/emailListener");
// require("./listeners/smsListener");
// require("./listeners/analyticsListener");

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server Running");
});
