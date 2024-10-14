import { Box, Button, TextField } from "@mui/material";
import React , { useState } from "react";

const Add=()=> {
    const [course,setCourse] = useState({
        CourseId:'',
        CourseName:'',
        Category:'',
        Discription:'',
        Fees:''
    })
    
    const fetchValue=(c)=>{
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
       InputLabelProps={{
        style: { color: 'white' }, 
      }}
      InputProps={{
        style: { color: 'white' }, 
      }}
       /><br/>

     <TextField id="standard-basic"
      label="CourseName" 
      value={course.CourseName}
      variant="standard"  
    
      onChange={fetchValue}  
      name="CourseName" /><br/> 

    <TextField id="standard-basic" 
    label="Department" 
    value={course.Category}
    variant="standard" 
  
     onChange={fetchValue} 
     name="Category" /><br/>

    <TextField id="standard-basic" 
    label="Discription"
    value={course.Discription}
     variant="standard"
    
    onChange={fetchValue} 
    name="Discription" /><br/>

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    </Box>
    </div>
  )
}

export default Add

    