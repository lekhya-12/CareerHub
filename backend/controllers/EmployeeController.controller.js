const EmployeeModel=require("../models/EmployeeModel.model")

async function getEmployeeById(req,res){
    const emp=await EmployeeModel.findOne({empId:req.params.id})
    if(!emp){
        return res.status(404).send({message:"Error finding employees"})
    }
    else
        res.status(200).send(emp)

}

async function updateEmployeeById(req, res) {
    const empId = req.params.id;
    const updateData = req.body;
    
    try {
        const updatedEmployee = await EmployeeModel.findOneAndUpdate(
            { empId },
            updateData, 
            { new: true, runValidators: true } 
        );
        if (!updatedEmployee) {
            return res.status(404).send({ message: "Employee not found" });
        }
        res.status(200).send(updatedEmployee);
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).send({ message: "Error updating employee details" });
    }
}

module.exports={getEmployeeById, updateEmployeeById}