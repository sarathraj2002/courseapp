import { Typography } from "@mui/material"

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
            
          </IconButto>
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