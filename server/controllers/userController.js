const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAllUsers = async (req,res) => {
    const users = await User.find()
    const patients = users.filter(singlePatient => singlePatient.role === 'patient')
    res.status(200).json({
        message: 'success',
        results: patients
    })
}

const getSingleUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        message: 'success',
        results: user
    })
}
const getUserByEmail = async (req, res) => {
    const user = await User.findOne({email:req.params.email});  
    res.status(200).json({
      message: 'success',
      results: user
    });
  }

const signup = async (req,res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if(userExists) {
        res.json({
            message: 'User already exists.',
            status: res.status
        })
    } else {
        bcrypt.genSalt(12, (err,salt) => {
            bcrypt.hash(password,salt, (err, hash) => {
                const user = { email, password: hash, name: req.body.name, gender: req.body.gender, phone: req.body.phone }
                const newuser = new User(user)
                newuser.save((err, result) => {
                    if(err){
                        return res.json({
                            message: 'Failed to signup.',
                            err: err.message
                        })
                    } else {
                        res.status(201).json({
                            results: [result]
                        })
                    }
                })
            })
        })
    }
}

const login = async (req,res) => {
    const { email,password } = req.body
    const userExists = await User.findOne({ email })
    if(!userExists){
        res.json({
            message: "User does not exist."
        })
    } else {
        const hash = userExists.password
        bcrypt.compare(password,hash, (err,result) => {
            if(err){
                return res.json({
                    message: err.message
                })
            }
            if(result){
                const user = {
                    id: userExists._id,
                    role: userExists.role,
                    name: userExists.name,
                    gender: userExists.gender,
                    email: userExists.email,
                    phone: userExists.phone
                }
                const token = jwt.sign(user,'this#isseckj83u09qjer')
                req.user = token
                res.json({
                    token,
                    user
                })
            } else {
                res.json({message: "Password or email mismatched!"})
              }
        })
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    signup,
    getUserByEmail,
    login
  }