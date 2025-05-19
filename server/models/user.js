const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  phone: { type: String },
  avatar: { type: String },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  status: {
    type: String,
    enum: ["invited", "active", "deleted"],
    default: "invited",
  },
  inviteToken: String,
  resetToken: String,
  resetTokenExpiry: Date,
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
