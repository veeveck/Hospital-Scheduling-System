const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDocController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//login
router.post("/login", loginController);
//register
router.post("/register", registerController);
//Auth
router.post("/getUserData", authMiddleware, authController);
//Apply Doctor
router.post("/apply-doctor", authMiddleware, applyDocController);
//Notifications
router.post("get-notifications", authMiddleware, getAllNotificationController);

module.exports = router;
