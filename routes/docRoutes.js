const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDocInfoController } = require("../controllers/docCtrl");
const router = express.Router();

//Post doc info
router.post("/getDocInfo", authMiddleware, getDocInfoController);

module.exports = router;
