import React from 'react'

const Home = () => {
    const[rows,setRows]=
  return (
    <Grid container spacing={3}>
        {rows.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.title}>
            <Card sx={{ Width:400, height:800 }}>
              <CardMedia
                component="img"
                height="600"
                image={row.image}
                alt={row.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {row.price}
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