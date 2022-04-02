const express = require('express')
const appointmentController = require('../controllers/appointmentController')
const verifyUser = require('../middleware')
const router = express.Router()

router
    .route('/')
    .get(appointmentController.getAllAppointments) //verifyUser
    .post(verifyUser,appointmentController.scheduleAppointment)

router
    .route('/user')
    .get(verifyUser,appointmentController.getAppointmentByUser)

router
    .route('/:id')
    .get(appointmentController.getSingleAppointment)
    .put(appointmentController.updateAppointment)
    .delete(appointmentController.deleteAppointment)

module.exports = router;