const mongoose = require("mongoose");

const EmailLogSchema = new mongoose.Schema(
  {
    userId: String,
    email: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmailLog", EmailLogSchema);