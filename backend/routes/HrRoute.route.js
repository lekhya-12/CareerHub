const express=require("express");
const HrRoute=express.Router()

const emp=require('../controllers/EmployeeController.controller');

HrRoute.get('/emp/:id',emp.getEmployeeById)
HrRoute.put('/empedit/:id',emp.updateEmployeeById)

module.exports=HrRoute




    
