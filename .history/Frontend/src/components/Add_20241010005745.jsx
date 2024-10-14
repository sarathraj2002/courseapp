import { Box, TextField } from "@mui/material";
import React , { useState } from "react";

function Add=()=> {
    const [course,setCourse] = useState({
        CourseId:'',
        CourseName:'',
        Category:'',
        Discription:'',
        Fees:''
    })
    
    let fetchValue=(c)=>{
        setCourse({...course,[c.target.name]:c.target.value})
    };
    const sendData=()=>{
        console.log(course)
    }
    
    return(
        
        <div>
    <h2 style={{ paddingTop: "50px",color:"black" }}>New Course</h2>

    <Box 
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >

    <TextField id="standard-basic"
     label="CourseId"
     value={course.CourseId}
      variant="standard"
    
      onChange={fetchValue}   
       name="CourseId" 
       /><br/>

     <TextField id="standard-basic"
      label="CourseName" 
      value={course.CourseName}
      variant="standard"  
    
      onChange={fetchValue}  
      name="CourseName" /><br/> 

    <TextField id="standard-basic" 
    label="Department" 
    value={employee.Department}
    variant="standard" 
    // value={employee. Department}
     onChange={fetchValue} 
     name="Department" /><br/>

    <TextField id="standard-basic" 
    label="Location"
    value={employee.Location}
     variant="standard"
    //  value={employee.Location} 
    onChange={fetchValue} 
    name="Location" /><br/>

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    </Box>
    </div>
  )
}

export default Add

    