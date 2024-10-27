const express=require("express");
const JobRoute=express.Router()

var jr=require("../controllers/JobController.controller")

JobRoute.get("/home",jr.getHomeJobs)
JobRoute.post("/apply",jr.applyForJob)
JobRoute.put("/edit/:jobId",jr.updateJob)
JobRoute.get('/applied/:empId', jr.getAppliedJobs);

JobRoute.post("/add",jr.addJob);
JobRoute.delete('/delete/:jobId', jr.deleteJob);
JobRoute.get('/details',jr.getEmpHR)
JobRoute.get('/view/:jobId',jr.viewEmp)

JobRoute.post('/approve',jr.approveJobApplication)
JobRoute.post('/reject',jr.rejectJobApplication)

module.exports=JobRoute




    
