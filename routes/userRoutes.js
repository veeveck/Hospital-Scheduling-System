const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDocController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllDoctorsController } = require("../controllers/adminCtrl");

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
//Delete Notification
router.post(
  "/delete-notifications",
  authMiddleware,
  deleteAllNotificationController
);
//Get All Doctors
router.get("/get-all-doctors", authMiddleware, getAllDocsController);
module.exports = router;
