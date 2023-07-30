const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDocInfoController,
  updateProfileController,
} = require("../controllers/docCtrl");
const router = express.Router();

//Post doc info
router.post("/getDocInfo", authMiddleware, getDocInfoController);
//Post Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);
module.exports = router;
