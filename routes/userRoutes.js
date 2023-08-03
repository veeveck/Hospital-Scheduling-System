const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDocController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocsController,
  bookAppointmentController,
  checkAvailabilityController,
  userAppointmentsController,
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
//Book Appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);
//Booking Availability
router.post("/check-availability", authMiddleware, checkAvailabilityController);
//Appointment List
router.get("/user-appointments", authMiddleware, userAppointmentsController);
module.exports = router;
