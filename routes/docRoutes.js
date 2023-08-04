const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDocInfoController,
  updateProfileController,
  getDocByIdController,
  docAppointmentController,
  updateStatusController,
} = require("../controllers/docCtrl");
const router = express.Router();

//Post doc info
router.post("/getDocInfo", authMiddleware, getDocInfoController);
//Post Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);
//Get SIngle Doctor
router.post("/getDocById", authMiddleware, getDocByIdController);
//get Appointments
router.get("/doc-appointments", authMiddleware, docAppointmentController);
//update Status
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
