const express = require("express");
const {
  login,
  sendInvite,
  register,
} = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { deleteUser } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");
const {
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const upload = require("../middlewares/multerConfig");
const { uploadAvatarController } = require("../controllers/userController");

const router = express.Router();

router.post("/login", login);
router.post("/invite", verifyToken, isAdmin, sendInvite);
router.post("/register/:token", register);

router.delete("/:id", authMiddleware, deleteUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.post(
  "/upload-avatar",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatarController
);

module.exports = router;
