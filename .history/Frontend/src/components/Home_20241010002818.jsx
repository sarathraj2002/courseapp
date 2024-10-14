import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  const courses=[
    {courseId:"FSD101",
     courseImage:"https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
     courseName:"Full Stack Development" ,
     category:"MERN",
     Discription:"FSD refers to the practice of developing both the front-end and back-end parts of a web or mobile application",
     Fees:"20000"
    },
    {
     courseId:"DSA102",
     courseImage:"https://miro.medium.com/v2/resize:fit:500/1*0JeuORZM3OoM9XtMmJvClg.jpeg",
     courseName:"Data Science Analyst" ,
     category:"Data analysis",
     Discription:"the process of examining, cleaning, transforming, and modeling data with the goal of discovering useful information, drawing conclusions, and supporting decision-making",
     Fees:"25000"
    },
    {
    courseId:"CS103",
    courseImage:"https://miro.medium.com/v2/resize:fit:500/1*0JeuORZM3OoM9XtMmJvClg.jpeg",
    courseName:"CyberSecurity" ,
    category:"cyber technology",
    Discription:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access",
    Fees:"35000"
    },
    {
      courseId: "DM103",
      courseName: "Digital Marketing",
      courseCategory: "Marketing",
      courseDescription: "Master SEO, social media, and online advertising strategies",
      courseImage: "https://www.pngitem.com/pimgs/m/75-757749_marketing-icon-png-flat-marketing-icon-png-transparent.png",
      courseFee: "340000"
    }
  ]
  return (
    <>
    <Grid container spacing={3}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.courseId}>
          <Card sx={{ width: 400, height: 800 }}>
            <CardMedia
              component="img"
              height="400"
              image={course.image}
              alt={course.courseName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.courseName}
              </Typography>
             
              <Typography variant="body2" color="text.secondary">
               Category: {course.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {course.Discription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fees: ${course.fees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Home;
