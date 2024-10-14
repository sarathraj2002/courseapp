const mongoose=require('mongoose');
 
const courseSchema=mongoose.Schema({
    Course
    CourseName:String,
    Category:String,
    Discription:String,
    Fee:Number
})
const courseData=mongoose.model('coursedb',courseSchema);
module.exports=courseData;