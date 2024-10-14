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
     courseId:"FSD101",
     courseImage:"https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
     courseName:"Full Stack Development" ,
     category:"MERN",
     Discription:"FSD refers to the practice of developing both the front-end and back-end parts of a web or mobile application",
     Fees:"20000"
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
