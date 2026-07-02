const User = require("../models/User");
const eventBus = require("../events/eventBus");
const uploadS3 = require("../midlware/uloadS3")

const loginUser = async (email, password) => {
  await User.create({
    email: "john@gmail.com",
    password: "123456",
    phone: "98737337737"
  })
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // password verification skipped

  eventBus.emit("USER_LOGGED_IN", {
    userId: user._id,
    email: user.email,
    phone: user.phone,
    loginTime: new Date(),
  });

  return {
    message: "Login Successful",
  };
};

const createUser = async(req, res) => {
  try {
    console.log("in create>>>>>>>>>>>>>>>>>>>>>",req.file)
    console.log("..................",req.body)
    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadS3(req.file);
    }else{
   return  res.status(404).json({
      success: 500,
      message: "Profile is required",
      // data: user,
    });
    }

    const user = await User.create({
      phone: req.body.phone,
      email: req.body.email,
      profileImage: imageUrl,
    });
    console.log("user.......................",user)


    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: user,
    });
  } catch (err) {
    console.log("err>>>>>>>>>>>.",err)
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  loginUser,
  createUser
};