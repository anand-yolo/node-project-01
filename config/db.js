const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let URI
    if(process.env.ENOVEMRT == "test"){
      URI = process.env.MONGO_URI 
    }else{
        URI = process.env.PROD_URI
    }
    await mongoose.connect(URI);
    console.log("MongoDB Connected",URI);
  } catch (err) {
    console.error("errrrrrrrrrrrr",err);
    // process.exit(1);
  }
};

module.exports = connectDB;