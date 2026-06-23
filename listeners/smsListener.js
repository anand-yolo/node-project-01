const eventBus = require("../events/eventBus");
const SmsLog = require("../models/SmsLog");

eventBus.on("USER_LOGGED_IN", async (data) => {
  console.log("Sending SMS");

  await SmsLog.create({
    userId: data.userId,
    phone: data.phone,
    status: "SMS_SENT",
  });
});