const express=require('express');
const app=new('express');
const courseRoutes=require('courseroutes');
const { config } = require('dotenv');
app.use('/course',courseRoutes);
require('dotenv')config

