const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//users
router.get("/getAllUsers", authMiddleware, getAllUsersController);
//doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//account status
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
