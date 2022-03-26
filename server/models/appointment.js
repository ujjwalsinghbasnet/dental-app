const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    visited: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
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