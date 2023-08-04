const appointmentModel = require("../models/appointmentModel");
const docModel = require("../models/docModel");
const userModel = require("../models/userModels");

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
const docAppointmentController = async (req, res) => {
  try {
    const doctor = await docModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({ docId: doctor._id });
    res.status(200).send({
      success: true,
      message: "Doctor Appointments fetched successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointment",
    });
  }
};
const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `Appointment updated ${status}`,
      onClickPath: "/doctor-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in update Status",
    });
  }
};
module.exports = {
  getDocInfoController,
  updateProfileController,
  getDocByIdController,
  docAppointmentController,
  updateStatusController,
};
