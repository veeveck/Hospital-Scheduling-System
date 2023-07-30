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
module.exports = { getDocInfoController };
