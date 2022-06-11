const Appointment = require("../models/appointment");
const AvailableAppointment = require("../models/availableAppointments");
const { ObjectId } = require("mongoose").Types;

const getAllAppointments = async (req, res) => {
  // if(req.user.role === 'admin'){
  const page_number = req.query.page;
  const limit = page_number ? 4 : null;
  const skip = (page_number - 1) * limit || 0;
  const selected_date = new Date(req.query.date).toLocaleDateString();
  let appointments;

  if (limit) {
    appointments = await Appointment.find({ date: selected_date })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip)
      .populate("user", "name phone");
  } else {
    appointments = await Appointment.find({ date: selected_date })
      .sort({ createdAt: -1 })
      .populate("user", "name phone");
  }
  return res.status(200).json({
    message: "success",
    results: appointments,
  });
  // }
  // else {
  //     res.status(503).json({
  //         message: 'Not Authorized'
  //     })
  // }
};

const getSingleAppointment = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: "invalid appointment id",
    });
  } else {
    const appointment = await Appointment.findById(req.params.id);
    res.status(200).json({
      message: "success",
      results: appointment,
    });
  }
};

const scheduleAppointment = async (req, res) => {
  const user = req.user;
  const { spaceID } = req.body;
  const userAppointment = {
    ...req.body,
    user: ObjectId(user.id),
  };
  try {
    const appointment = await Appointment.create(userAppointment);
    const availableAppointment = await AvailableAppointment.findById(spaceID);
    await AvailableAppointment.findByIdAndUpdate(spaceID, {
      space: parseInt(availableAppointment.space) - 1,
    });
    res.status(201).json({
      message: "success",
      results: appointment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(
    req.params.id,
    { visited: true },
    { new: true, runValidators: true }
  );
  res.status(201).json({
    message: "success",
    results: appointment,
  });
};

// DELETE A Appointment ITEM
const deleteAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "success",
    results: appointment,
  });
};
//get appointment by user

const getAppointmentByUser = async (req, res) => {
  const user = req.user;
  try {
    const appointment = await Appointment.find({ user: user.id });
    res.status(200).json({
      message: "success",
      results: appointment,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllAppointments,
  getSingleAppointment,
  scheduleAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentByUser,
};
