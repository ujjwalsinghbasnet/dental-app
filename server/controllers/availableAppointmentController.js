const AvailableAppointment = require('../models/availableAppointments')
const mongoose = require('mongoose')


const getAllAppointments = async (req,res) => {
    const appointments = await AvailableAppointment.find()
    res.status(200).json({
        message: 'success',
        results: appointments
    })
}

const updateSpace = async (req,res) => {
    const space = req.body.space
    const appointment = await AvailableAppointment.updateOne({_id: req.params.id}, { space }, {new: true, runValidators: true})
    res.status(201).json({
        message: 'success',
        results: appointment
    })
}

const deleteAvailableSlot = async (req,res) => {
    const appointment =await AvailableAppointment.findByIdAndDelete(req.params.id)
    res.json({
        message: 'success',
        results: appointment
    })
}


module.exports = {
    getAllAppointments,
    updateSpace,
    deleteAvailableSlot
}