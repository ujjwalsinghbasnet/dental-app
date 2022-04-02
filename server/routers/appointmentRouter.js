const express = require('express')
const appointmentController = require('../controllers/appointmentController')
const verifyUser = require('../middleware')
const router = express.Router()

router
    .route('/')
    .get(appointmentController.getAllAppointments) //verifyUser
    .post(verifyUser,appointmentController.scheduleAppointment)

router
    .route('/:id')
    .get(appointmentController.getSingleAppointment)
    .put(appointmentController.updateAppointment)
    .delete(appointmentController.deleteAppointment)

router
    .route(verifyUser,'/user/:userid')
    .get(appointmentController.getAppointmentByUser)

module.exports = router;