import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import React from 'react'


const Navbar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'#FFDE4D'}}  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black',textAlign:'left' }}>
              <h2> COURSEAPP</h2>
          </Typography>
       <Link to={'/'}><Button  sx={{margin:2}} color="black">Home</Button></Link> 
       <Link to={'/add'}><Button variant='contained'  color="inherit">ADD</Button></Link> 
      
        </Toolbar>
      </AppBar>
      </Box>
    )
  }
  
  export default Navbar