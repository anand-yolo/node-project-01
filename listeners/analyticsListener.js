const eventBus = require("../events/eventBus");
const AnalyticsLog = require("../models/AnalyticsLog");

eventBus.on("USER_LOGGED_IN", async (data) => {
  console.log("Analytics Updated");

  await AnalyticsLog.create({
    userId: data.userId,
    eventType: "LOGIN",
    loginTime: data.loginTime,
  });
});