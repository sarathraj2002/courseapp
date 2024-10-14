const express=require('express');
const router=express.Router();
const courseModel=require('../model/courseData')
router.use(express.json());
router.use(express.urlencoded({extended:true}));










module exports=r