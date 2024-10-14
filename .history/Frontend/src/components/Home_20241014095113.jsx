import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
 import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [courses,setCourses]=useState([]);
  //  connecting external API
         useEffect(()=>{
            
            axios.get('http://localhost:3000/course/course').then((res)=>{
                setCourses(res.data)
            
            })
         },[])

          useEffect(()=>{
          })

          let deleteCourse=(p)=>{
          
          axios.delete('https://localhost:3000/course/course/delete/'+p).then((res)=>{
            alert ('deleted');
           window.location.reload();
      
       })
    }
    useEffect(()=>{
    })

    let updateCourse=(p)=>{
    
    axios.update('https://localhost:3000/course/edit'+p).then((res)=>{
      alert ('updated');
     window.location.reload();

 })
}
const  navigate=useNavigate()
function up(params) {
  
}
  return (
    <>
    <Grid container spacing={3} sx={{marginTop:8}}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.courseId}>
          <Card sx={{ width: 400, height: 700 ,marginLeft:2 }}>
            <CardMedia
              component="img"
              height="300"
              image={course.courseImage}
              alt={course.courseId}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {course.courseId}
              </Typography>
             
              <Typography gutterBottom variant="h5" component="div">
                {course.courseName}
              </Typography>
             
              <Typography variant="body2" color="black">
               <h4>Category: {course.category}</h4>
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {course.Discription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h4>Fees: ${course.Fees}</h4>
              </Typography>
            </CardContent>
            <CardActions >
          <Button size="small" color="primary" sx={{ backgroundColor: '#4caf50', color: 'white' }} onClick={() => {updateCourse(course)}}>
            Edit
          </Button>
          <Button size="small" color="secondary" varient="contained" sx={{ backgroundColor: 'red', color: 'white' }} onClick={() => {deleteCourse(course._id)}}>
            Delete
          </Button>
        </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Home;
