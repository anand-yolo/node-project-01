const eventBus = require("../events/eventBus");
const EmailLog = require("../models/EmailLog");

eventBus.on("USER_LOGGED_IN", async (data) => {
  console.log("Sending Email");

  await EmailLog.create({
    userId: data.userId,
    email: data.email,
    status: "EMAIL_SENT",
  });
});