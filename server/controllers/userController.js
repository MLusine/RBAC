const User = require("../models/user");

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || id.length !== 24) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.uploadAvatarController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const userId = req.user.id;
    const avatarPath = `uploads/photos/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: avatarPath },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({ message: "Uploaded", url: avatarPath });
  } catch (err) {
    console.error("Avatar upload error:", err);
    res.status(500).json({ message: "Server error during avatar upload" });
  }
};
