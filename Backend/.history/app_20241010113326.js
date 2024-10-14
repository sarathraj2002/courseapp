const express=require('express');
const cors
const app=new(express);
const courseRoutes=require('./routes/courseroutes');
app.use('/course',courseRoutes);
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/db')



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
