const User = require('../models/user');
const { ObjectId } = require('mongoose').Types;
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
        res.status(404).json({
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
                res.status(403).json({message: "Password or email mismatched!"})
              }
        })
    }
}

const changeDetails = async (req,res) => {
    const id = req.params.id.trim() //remove any unnecessary blank spaces before or after id parameter in url
    
    if(!ObjectId.isValid(id)){ //check if the provided id is valid object id
        return res.json({
            message: "invalid user id"
        })
    } else {
        const { phone, address } = req.body
        try{
            const userUpdate = await User.updateOne({_id: id}, { phone, address }, {new: true, runValidators: true})
            res.status(201).json({
                message: 'success',
                results: userUpdate
            })
        } catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

const changePassword = async (req,res) => {
    const id = req.params.id.trim()

    if(!ObjectId.isValid(id)){
        return res.json({
            message: "invalid user id"
        })
    } else {
        const userExists = await User.findOne({ _id: id })
        if(!userExists){ //check if the user with given id exists -> return 404 if not found
            return res.status(404).json({
                message: 'user not found'
            })
        } else {
            const hash = userExists.password //get the old password from existing user document
            const { old_password, new_password } = req.body
            bcrypt.compare(old_password,hash, (err,result) => { //comparing if existing password match old password
                if(err){
                    return res.json({
                        message: err.message
                    })
                }
                if(result){
                    bcrypt.genSalt(12, (err,salt) => { //if old password matched -> generate hash of new password
                        if(!err){
                            bcrypt.hash(new_password,salt, (err, hash) => {
                                if(err){
                                    return res.json({
                                        message: err.message
                                    })
                                }
                                if(hash){ //hashing successfull -> update the user with provided id
                                    User.updateOne({_id: id}, { password: hash }, {new: true, runValidators: true}).then(doc => {
                                        res.status(201).json({
                                            message: 'success'
                                        })
                                    })
                                }
                            })
                        } else {
                            res.json({
                                message: err.message || 'Error occurred in hashing'
                            })
                        }
                    })
                } else {
                    res.status(403).json({message: "Password mismatched!"}) //if compare function results false -> password mismatched
                }
            })
        }

    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    signup,
    getUserByEmail,
    login,
    changeDetails,
    changePassword
  }