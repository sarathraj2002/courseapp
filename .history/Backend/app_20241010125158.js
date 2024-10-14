const express=require('express');
const cors=require('cors')
const app=new express();
app.use(cors())
const courseRoutes=require('./routes/courseroutes');
app.use('/course',courseRoutes);
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
//app.use(cors())

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/db')


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
