const AvailableAppointment = require('../models/availableAppointments')


const createAvailableAppointment = async (req,res) => {
    const user = req.user
    if(user.role === 'admin'){
        try{
            const appointmentBody = {
                ...req.body,
                date: new Date(req.body.date).toLocaleDateString()
            }
            const appointment = await AvailableAppointment.create(appointmentBody)
            res.status(201).json({
                message: 'success',
                results: appointment
            });
        } catch(error){
            res.status(400).json({
                message: error.message
            });
        }
    } else {
        return res.status(503).json({
            message: 'Not authorized'
        })
    }
}

const dummyAppointments = [
    {
        _id: '687eeb9',
        doctor: 'Dr. John',
        timeslot: '9AM-10AM',
        space: '2',
        price: 800,
        date: new Date()
    },
    {
        _id: '617bdb9',
        doctor: 'Dr. Jane',
        timeslot: '10AM-11AM',
        space: '5',
        price: 500,
        date: new Date()
    },
    {
        _id: '129eBxN',
        doctor: 'Dr. Mary',
        timeslot: '9AM-10AM',
        space: '2',
        price: 800,
        date: new Date()
    },
]

const getAllAppointments = async (req,res) => {
    const selectedDate = req.query.date
    const appointments = await AvailableAppointment.find({date: new Date(selectedDate).toLocaleDateString()})
    return res.status(200).json({
        message: 'success',
        results: dummyAppointments.concat(appointments)
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
    createAvailableAppointment,
    getAllAppointments,
    updateSpace,
    deleteAvailableSlot
}