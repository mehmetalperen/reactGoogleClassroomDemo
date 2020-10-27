import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import "./Navbar.css"
import HomeIcon from '@material-ui/icons/Home';
import orange from '@material-ui/core/colors/orange';


 function Navbar() {



    return(
        <div className = "navbar-container">
            <FormGroup>
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color={orange[50]} aria-label="menu">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6">
                    <h4 style={{color: "white"}}>Google Classroom</h4>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
    
}

export default Navbar;