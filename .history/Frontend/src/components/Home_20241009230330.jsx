import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';



const Home = () => {
  const [rows,setRows]=useState([]);

  return (
    <Grid container spacing={3}>
        {rows.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.title}>
            <Card sx={{ Width:400, height:800 }}>
              <CardMedia
                component="img"
                height="600"
                image={row.image}
                alt={row.CourseId}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.CourseId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  : {row.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {row.rating?.rate || 'No rating'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  )
}

export default Home