const availableAppointmentController = require('../controllers/availableAppointmentController')
const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(availableAppointmentController.getAllAppointments)
    
router
    .route('/:id')
    .put(availableAppointmentController.updateSpace)
    .delete(availableAppointmentController.deleteAvailableSlot)

module.exports = router;