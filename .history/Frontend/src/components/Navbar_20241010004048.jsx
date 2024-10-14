import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
const Navbar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
               EMPLOYEE APP
          </Typography>
       <Link to={'/'}><Button variant='contained'  color="inherit">Home</Button></Link> 
       <Link to={'/add'}><Button variant='contained'  color="inherit">ADD</Button></Link> 
      
        </Toolbar>
      </AppBar>
      </Box>
    )
  }
  
  export default Navbar