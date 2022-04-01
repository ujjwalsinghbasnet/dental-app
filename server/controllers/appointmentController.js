const Appointment = require('../models/appointment')
const { ObjectId } = require('mongoose').Types

const getAllAppointments = async (req,res) => {
    
    if(req.user.role === 'admin'){
        const limit = req.query.limit
        const filter = req.query.filter
        let appointments;
        if(limit){
            appointments = await Appointment.find().sort({ createdAt: -1 }).limit(parseInt(limit)).populate('user','name phone')
        } else if(filter){
            appointments = await Appointment.find({ date: { $in: [filter]}}).sort({ createdAt: -1 }).populate('user','name phone')
        } else {
            appointments = await Appointment.find().sort({ createdAt: -1 }).populate('user','name phone')
        }

        return res.status(200).json({
            message: 'success',
            results: appointments
        })
    } else {
        res.status(503).json({
            message: 'Not Authorized'
        })
    }
}

const getSingleAppointment = async (req,res) => {

    if(!ObjectId.isValid(req.params.id)){
        res.status(400).json({
            message: 'invalid appointment id'
        })
    } else {
        const appointment = await Appointment.findById(req.params.id);
        res.status(200).json({
            message: 'success',
            results: appointment
        });
    }
}

const scheduleAppointment = async (req,res) => {
    const userAppointment = {
        ...req.body,
        user: ObjectId(req.body.user._id)
    }
    try{
        const appointment = await Appointment.create(userAppointment)
        res.status(201).json({
            message: 'success',
            results: appointment
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}
const updateAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(201).json({
      message: 'success',
      results: appointment
    });
  }
  
  // DELETE A Appointment ITEM
  const deleteAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: 'success',
        results: appointment
    });
  }
  //get appointment by user
  
  const getAppointmentByUser = async (req, res) => {
    const id = req.params.userid
    const appointment = await Appointment.findOne({user:id});  
    res.status(200).json({
        message: 'success',
        results: appointment
    });
  }

module.exports = {
    getAllAppointments,
    getSingleAppointment,
    scheduleAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentByUser
}