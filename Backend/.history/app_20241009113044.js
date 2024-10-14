const express=require('express');
const app=new(express);
const courseRoutes=require('./routes/courseroutes');
app.use('/course',courseRoutes);
require('dotenv').config();
const PORT=process.env.
require('./db/db')



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
