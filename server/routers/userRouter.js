const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.use(express.urlencoded({ extended: true }))

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.signup)

router
    .route('/login')
    .post(userController.login)


module.exports = router;