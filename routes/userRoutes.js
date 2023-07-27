const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDocController,
  getAllNotificationController,
  deleteAllNotificationController,
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
router.post("/get-notifications", authMiddleware, getAllNotificationController);
//
router.post(
  "/delete-notifications",
  authMiddleware,
  deleteAllNotificationController
);
module.exports = router;
