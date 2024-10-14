import { useState } from "react";

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

    


    )
}