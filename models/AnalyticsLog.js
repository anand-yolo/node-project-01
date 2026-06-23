const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema(
  {
    userId: String,
    eventType: String,
    loginTime: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AnalyticsLog", AnalyticsSchema);