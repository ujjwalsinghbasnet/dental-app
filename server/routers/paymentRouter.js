const express = require('express')
const router = express.Router()

const paymentWithKhalti = require('../controllers/paymentController')

router
    .route('/')
    .post(paymentWithKhalti)

module.exports = router