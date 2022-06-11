const AvailableAppointment = require("../models/availableAppointments");

const createAvailableAppointment = async (req, res) => {
  const user = req.user;
  if (user.role === "admin") {
    try {
      const appointmentBody = {
        ...req.body,
      };
      const appointment = await AvailableAppointment.create(appointmentBody);
      res.status(201).json({
        message: "success",
        results: appointment,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  } else {
    return res.status(503).json({
      message: "Not authorized",
    });
  }
};

// const dummyAppointments = [
//     {
//         _id: '687eeb9',
//         doctor: 'Dr. John',
//         timeslot: '9AM-10AM',
//         space: '2',
//         price: 800,
//         date: new Date()
//     },
//     {
//         _id: '617bdb9',
//         doctor: 'Dr. Jane',
//         timeslot: '10AM-11AM',
//         space: '5',
//         price: 500,
//         date: new Date()
//     },
//     {
//         _id: '129eBxN',
//         doctor: 'Dr. Mary',
//         timeslot: '9AM-10AM',
//         space: '2',
//         price: 800,
//         date: new Date()
//     },
// ]

const getAllAppointments = async (req, res) => {
  const selectedDate = new Date(req.query.date).toLocaleDateString();
  const appointments = await AvailableAppointment.find({
    date: selectedDate,
    space: { $gt: 0 },
  });
  return res.status(200).json({
    message: "success",
    results: appointments,
  });
};
//dummyAppointments.concat(appointments)

const getSingleAppointment = async (req, res) => {
  const appointment = await AvailableAppointment.findById(req.params.id);
  return res.status(200).json({
    message: "success",
    result: appointment,
  });
};

const updateAppointment = async (req, res) => {
  const appointment = await AvailableAppointment.findById(req.params.id);
  const { space, timeslot, doctor, price } = req.body;
  appointment.space = space;
  appointment.timeslot = timeslot;
  appointment.doctor = doctor;
  appointment.price = price;
  appointment.save().then((doc, err) => {
    if (!err) {
      return res.status(201).json({
        message: "success",
        results: doc,
      });
    } else {
      return res.json({
        message: err.message || "something went wrong!",
      });
    }
  });
};

const deleteAvailableSlot = async (req, res) => {
  const appointment = await AvailableAppointment.findByIdAndDelete(
    req.params.id
  );
  res.json({
    message: "success",
    results: appointment,
  });
};

module.exports = {
  createAvailableAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAvailableSlot,
  getSingleAppointment,
};
