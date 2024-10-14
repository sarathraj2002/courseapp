const mongoose=require('mongoose');
 
const courseSchema=mongoose.Schema({
    courseName:String,
    category:string
})