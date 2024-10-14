const mongoose=require('mongoose');
 
const courseSchema=mongoose.Schema({
    courseName:String,
    category:String,
    discription:String,
    fee:Number
})
const courseData=mongoose('model')