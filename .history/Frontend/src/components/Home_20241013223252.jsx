import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
 import axios from 'axios';

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
          
          axios.delete('https://localhost:3000/course/delete').then((res)=>{
            alert ('deleted');
           window.location.reload
      
       })
    },[])

// const courses=
// [
//     {courseId:"FSD101",
//      courseImage:"https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
//      courseName:"Full Stack Development" ,
//      category:"MERN",
//      Discription:"FSD refers to the practice of developing both the front-end and back-end parts of a web or mobile application.",
//      Fees:"20000"
//     },
//     {
//      courseId:"DSA102",
//      courseImage:"https://miro.medium.com/v2/resize:fit:500/1*0JeuORZM3OoM9XtMmJvClg.jpeg",
//      courseName:"Data Science Analyst" ,
//      category:"Data analysis",
//      Discription:"The process of examining, cleaning, transforming, and modeling data with the goal of discovering useful information, drawing conclusions, and supporting decision-making.",
//      Fees:"25000"
//     },
//     {
//     courseId:"CS103",
//     courseImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gL4oQCxa3Z5H5Vo1R7BxL9k7NMSnUPxkaEohkkMih56_5GZNfT1jAIyb6ZTuqMIfm-M&usqp=CAU",
//     courseName:"Cyber Security" ,
//     category:"Cyber Technology",
//     Discription:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access.",
//     Fees:"35000"
//     },
//     {
//       courseId: "DM103",
//       courseName: "Digital Marketing",
//       category: "Marketing",
//       Discription: "Master SEO, social media, and online advertising strategies.",
//       courseImage: "https://www.pngitem.com/pimgs/m/75-757749_marketing-icon-png-flat-marketing-icon-png-transparent.png",
//       Fees: "340000"
//     }
//   ]
  return (
    <>
    <Grid container spacing={3} sx={{marginTop:8}}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.courseId}>
          <Card sx={{ width: 400, height: 700 ,marginLeft:5 }}>
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
            <CardActions>
          <Button size="large" color="primary"  onClick={() => handleEdit(course.courseId)}>
            Edit
          </Button>
          <Button size="large" color="secondary" onClick={() => handleDelete(course.courseId)}>
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
