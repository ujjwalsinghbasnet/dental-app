const mongoose = require('mongoose');

const availableappointmentSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true
  },
  space:{
    type:String,
    trim:true,
    required:true
  },
  time: {
    type:String,
    trim:true,
    required:true
  },
  price:{
    type: Number,
    required: true
  }
})

const AvailableAppointment = mongoose.model('AvailableAppointment', availableappointmentSchema);
module.exports = AvailableAppointment;
