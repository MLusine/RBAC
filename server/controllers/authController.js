const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendInviteEmail, sendResetEmail } = require("../utils/sendEmail");

const JWT_SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.password)
    return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, role: user.role });
};

exports.sendInvite = async (req, res) => {
  const { email } = req.body;
  const inviteToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "3d" });
  await User.create({ email, inviteToken });
  await sendInviteEmail(email, inviteToken);
  res.json({ message: "Invite sent" });
};

exports.register = async (req, res) => {
  const { token, password, name, phone } = req.body;
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findOne({ email: decoded.email, status: "invited" });
  if (!user) return res.status(400).json({ message: "Invalid invite" });

  user.password = await bcrypt.hash(password, 10);
  user.name = name;
  user.surname = surname;
  user.phone = phone;
  user.status = "active";
  user.inviteToken = null;
  await user.save();

  res.json({ message: "Registration complete" });
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      surname: user.surname,
      email: user.email,
    });
  } catch (err) {
    console.error("Error in getUserById:", err);
    res.status(500).json({ message: "Server error" });
  }
};
