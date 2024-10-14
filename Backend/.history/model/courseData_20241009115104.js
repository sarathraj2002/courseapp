const mongoose=require('mongoose');
 
const courseSchema=mongoose.Schema({
    CourseId:String,
    CourseName:String,
    Category:String,
    Discription:String,
    Fee:Number
})
const courseData=mongoose.model('coursedb',courseSchema);
module.exports=courseData;