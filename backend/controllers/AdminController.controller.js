const EmployeeModel=require("../models/EmployeeModel.model")

async function getEmpHR(req,res){
    try {
      const employees = await EmployeeModel.find({ role: { $in: ['hr', 'employee'] } });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports={getEmpHR};