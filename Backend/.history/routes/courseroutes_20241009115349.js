const express=require('express');
const router=express.Router();
const courseModel=require('../model/courseData')
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//get
router.get('/course',async(res,res)=>{
    try{
        const data=await courseModel.find()
        res.status(200).send(data);

    }catch(error){
        res.status(404).send('data not found');
    }
})








module.exports=router