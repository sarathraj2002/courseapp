const express=require('express');
const router=express.Router();
const courseModel=require('../model/courseData')
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',async(res,req)=>{
    try{
        const data=await courseModel.find()
        res.status(200).send(data);

    }catch(er)
})








module.exports=router