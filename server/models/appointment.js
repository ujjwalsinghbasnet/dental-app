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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment