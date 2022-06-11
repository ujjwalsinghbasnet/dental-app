<<<<<<< HEAD
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    timeslot: {
      type: String,
      trim: true,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    visited: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    payment: {
      type: String,
      default: "due",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
=======
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    timeslot: {
        type: String,
        trim: true,
        required: true
    },
    doctor: {
        type: String,
        required: true  
    },
    visited: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    payment: {
        type: String,
        default: 'due'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
