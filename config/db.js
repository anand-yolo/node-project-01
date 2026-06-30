const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
<<<<<<< HEAD
  } catch (error) {
    console.log({error});
=======
  } catch ("eeeeeeeeeeeeeeeeeeeee",error) {
    console.log(error);
>>>>>>> 13172cb (s)
    process.exit(1);
  }
};

module.exports = connectDB;
