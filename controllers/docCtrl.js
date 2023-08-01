const docModel = require("../models/docModel");

const getDocInfoController = async (req, res) => {
  try {
    const doctor = await docModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor Data Fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching doctor details",
    });
  }
};
const updateProfileController = async (req, res) => {
  try {
    const doctor = await docModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Profile Update Issue",
      error,
    });
  }
};
const getDocByIdController = async (req, res) => {
  try {
    const doctor = await docModel.findOne({ _id: req.body.docId });
    res.status(200).send({
      success: true,
      message: "Single Doc Info fetched",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting Doc Info",
    });
  }
};
module.exports = {
  getDocInfoController,
  updateProfileController,
  getDocByIdController,
};
