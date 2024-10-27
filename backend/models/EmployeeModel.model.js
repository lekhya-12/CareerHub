const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    empId: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String
    },
    name: { 
        type: String,
        required: true
    },
    age: { 
        type: Number,
        required: true
    },
    gender: { 
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    role: {
        type: String,
        required: true,
        default: 'employee',
        enum: ['employee', 'admin', 'hr'],
    }
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;
