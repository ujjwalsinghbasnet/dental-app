const availableAppointmentController = require('../controllers/availableAppointmentController')
const express = require('express')
const verifyUser = require('../middleware')
const router = express.Router()

router
    .route('/')
    .get(availableAppointmentController.getAllAppointments)
    .post(verifyUser, availableAppointmentController.createAvailableAppointment)
    
router
    .route('/:id')
    .get(availableAppointmentController.getSingleAppointment)
    .put(availableAppointmentController.updateAppointment)
    .delete(availableAppointmentController.deleteAvailableSlot)

module.exports = router;