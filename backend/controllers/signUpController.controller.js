const EmployeeModel = require('../models/EmployeeModel.model');

async function saveEmployee(req, res) {
  const { email, password, empId, mobileNumber, role, name , age, gender } = req.body;

  if (!email || !password || !mobileNumber || !empId || !role || !name || !age || !gender) {
    return res.status(400).send({ message: 'Please fill all the fields' });
  }

  const roles = ["employee", "hr", "admin"];
  if (!roles.includes(role)) {
    return res.status(400).send({ message: "Enter correct details" });
  }

  try {
    const emp = await EmployeeModel.findOne({ empId });
    if (emp) {
      res.status(404).send({ message: "Employee with this id already exists" });
    } else {
      const newEmployee = new EmployeeModel({ email, password, empId, mobileNumber, role, name, age, gender });
      await newEmployee.save();
      res.status(200).send("New Employee added");
    }
  } catch (err) {
    console.log({ message: err });
  }
}

module.exports = { saveEmployee };