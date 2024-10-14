const mongoose=require('mongoose');
 
const courseSchema=mongoose.Schema({
    CourseName:String,
    Category:String,
    discription:String,
    fee:Number
})
const courseData=mongoose.model('coursedb',courseSchema);
module.exports=courseData;