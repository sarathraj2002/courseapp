const express=require('express');
const router=express.Router();
const courseModel=require('../model/courseData')
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//get
router.get('/course',async(req,res)=>{
    
    try{
        const data=await courseModel.find()
        res.status(200).send(data);

    }catch(error){
        res.status(404).send('data not found');
    }
})

//post
router.post('/addCourse',async(req,res)=>{
    try{
        var item=req.body;
        const data1=new courseModel(item);
        const savedData=await data1.save();
        res.status(200).send('post successful');

    }catch(error){
        res.status(404).send('post unsuccessful');
    }
})






module.exports=router