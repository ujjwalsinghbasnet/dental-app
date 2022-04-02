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
module.exports = AvailableAppointment;
