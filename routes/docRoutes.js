const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDocInfoController,
  updateProfileController,
  getDocByIdController,
} = require("../controllers/docCtrl");
const router = express.Router();

//Post doc info
router.post("/getDocInfo", authMiddleware, getDocInfoController);
//Post Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);
//Get SIngle Doctor
router.post("/getDocById", authMiddleware, getDocByIdController);
module.exports = router;
