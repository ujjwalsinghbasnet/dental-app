<<<<<<< HEAD
const mongoose = require("mongoose");

const availableappointmentSchema = new mongoose.Schema({
  doctor: {
    type: String,
    trim: true,
    required: true,
  },
  space: {
    type: String,
    trim: true,
    required: true,
  },
  timeslot: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const AvailableAppointment = mongoose.model(
  "AvailableAppointment",
  availableappointmentSchema
);
=======
const mongoose = require('mongoose');

const availableappointmentSchema = new mongoose.Schema({
  doctor:{
    type:String,
    trim:true,
    required:true
  },
  space:{
    type:String,
    trim:true,
    required:true
  },
  timeslot: {
    type:String,
    trim:true,
    required:true
  },
  price:{
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const AvailableAppointment = mongoose.model('AvailableAppointment', availableappointmentSchema);
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
module.exports = AvailableAppointment;
