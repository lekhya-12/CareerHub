const express=require('express')
const signupRoute=express.Router()

const emp=require('../controllers/signUpController.controller')

signupRoute.post('/',emp.saveEmployee)

module.exports=signupRoute