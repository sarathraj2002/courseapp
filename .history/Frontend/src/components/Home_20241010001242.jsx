import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  const courses=[
    {courseImage:"data:image/png;base64,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"
     courseId:"FSD101",
     courseName:"Full Stack Development" ,
     category:"MERN",
     Discription:"FSD refers to the practice of developing both the front-end and back-end parts of a web or mobile application",
     cous
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
              alt={course.courseId}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.courseId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {course.courseName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Category: {course.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {course.description}
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
