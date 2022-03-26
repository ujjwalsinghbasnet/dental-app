const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    role:{
        type: String,
        default: "patient"
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    photo: {
        type: String,
        trim: true,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
