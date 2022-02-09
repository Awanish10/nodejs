const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email is already prasent'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
    },
    mobile:{
        type:String,
        min:10,
        max:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        minLength:3
    }
});

const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;


















