const mongoose = require("mongoose");

const SmsLogSchema = new mongoose.Schema(
  {
    userId: String,
    phone: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SmsLog", SmsLogSchema);