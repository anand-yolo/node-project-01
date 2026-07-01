const User = require("../models/User");
const eventBus = require("../events/eventBus");

const loginUser = async (email, password) => {
    await User.create({
        email:"john@gmail.com",
        password:"123456",
        phone:"98737337737"
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

module.exports = {
  loginUser,
};