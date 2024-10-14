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
    let fetchvalue
}