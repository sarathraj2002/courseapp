import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  const courses=[
    {}
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
