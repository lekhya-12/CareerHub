// // const mongoose=require('mongoose');
// // const EmployeeSchema =mongoose.Schema({
    
// //     email:{
// //         type:String,
// //         required:true
// //     },
// //     password:{
// //         type:String,
// //         required:true
// //     },
// //     empId:{
// //         type:String,
// //         required:true
// //     },
// //     mobileNumber:{type:String},
// //     role:{
// //         type:String,
// //         required:true,
// //         default:'employee',
// //     enum:['employee','admin','hr'],
// //     }
// // })

// // const EmployeeModel=mongoose.model("employee",EmployeeSchema)
// // module.exports=EmployeeModel

// const mongoose = require('mongoose');

// const EmployeeSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   empId: {
//     type: String,
//     required: true
//   },
//   mobileNumber: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     required: true,
//     default: 'employee',
//     enum: ['employee', 'admin', 'hr']
//   },
//   name: {         // New field
//     type: String,
//     required: true
//   },
//   age: {          // New field
//     type: Number,
//     required: true
//   },
//   gender: {       // New field
//     type: String,
//     required: true,
//     enum: ['male', 'female', 'other']
//   }
// });

// const EmployeeModel = mongoose.model('employee', EmployeeSchema);
// module.exports = EmployeeModel;

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
    name: { // New field
        type: String,
        required: true
    },
    age: { // New field
        type: Number,
        required: true
    },
    gender: { // New field
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
