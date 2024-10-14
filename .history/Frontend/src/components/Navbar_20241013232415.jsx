import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import React from 'react'


const Navbar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bac}}  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h3> COURSEAPP</h3>
          </Typography>
       <Link to={'/'}><Button variant='contained' sx={{margin:2}} color="inherit">Home</Button></Link> 
       <Link to={'/add'}><Button variant='contained'  color="inherit">ADD</Button></Link> 
      
        </Toolbar>
      </AppBar>
      </Box>
    )
  }
  
  export default Navbar