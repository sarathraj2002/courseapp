import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React , { useEffect, useState } from "react";
import {  useLocation, Navigate, useNavigate } from "react-router-dom";

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
    
    const location=useLocation()
    const navigate=useNavigate()
    let sendData=()=>{
      if (location.state!=null){
        axios.put('http://localhost:3000/course/edit/'+location.state.course._id,course).then((res)=>{
          alert('Data updated');
          navigate('/')
        }).catch((error)=>{
          console.log(error);
        })
      }else{
        axios.post('http://localhost:3000/course/addCourse',course).then((res)=>{
          Navigate('/')
        }).catch((error)=>{
          console.log(error)
        })
      }
    }

    useEffect(()=>{
      if(location.state!=null){
        setCourse({...course,
          CourseId:location.state.course.CourseId,
          CourseName:location.state.course.CourseName,
          Category:location.state.course.Category,
          Discription:location.state.course.Discription,
          Fees:location.state.course.Fees,
        })
      }
    },[])
    
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
      variant="outlined"
    onChange={fetchValue}   
       name="CourseId" 
      
       /><br/>

     <TextField id="standard-basic"
      label="CourseName" 
      value={course.CourseName}
      variant="outlined"  
      onChange={fetchValue}  
      name="CourseName" /><br/> 

    <TextField id="standard-basic" 
    label="Category" 
    value={course.Category}
    variant="outlined" 
     onChange={fetchValue} 
     name="Category" /><br/>

    <TextField id="standard-basic" 
    label="Discription"
    value={course.Discription}
     variant="outlined"
     onChange={fetchValue} 
     name="Discription" /><br/>

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    </Box>
    </div>
  )
}

export default Add

    