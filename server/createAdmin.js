require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

mongoose.connect(process.env.MONGO_URI);
(async () => {
  try {
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin already exists.");
      return process.exit(0);
    }

    const password = await bcrypt.hash(process.env.ADMIN_PASS, 10);
    const admin = new User({
      email: "admin@example.com",
      password: password,
      role: "admin",
      status: "active",
    });

    await admin.save();
    console.log("Admin user created.");
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err.message);
    process.exit(1);
  }
})();
