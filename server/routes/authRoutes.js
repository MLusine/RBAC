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

const router = express.Router();

router.post("/login", login);
router.post("/invite", verifyToken, isAdmin, sendInvite);
router.post("/register/:token", register);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
