const mongoose=require('mongoose');
const LoginSchema =mongoose.Schema({
    empid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LoginModel=mongoose("login",LoginSchema)
module.exports=LoginModel