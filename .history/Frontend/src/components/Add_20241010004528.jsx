import { useState } from "react";

function add() {
    const [course,setCourse] = useState({
        CourseId:'',
        CourseName:'',
        Category:'',
        Discription:'',
        Fees:''
    })
    const [errors,setErrors]=useState({});
    let fetchValue=(c)=>{
        setCourse({...course,[c.target.name]:c.target.value})
    }
    
    return(
        <div>
    <h2 style={{ paddingTop: "50px",color:"black" }}>New Course</h2>

      <Box
        component="form"
        sx={{'& > :not(style)': { m:1,width:'25ch'}}}  >
        noValidate

      </Box>



    )
}