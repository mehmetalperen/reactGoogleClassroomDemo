import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClassTitle from './components/ClassTitle';
import UpcomingEvent from './components/UpcomingEvent';
import Comments from './components/CommentsFolder/Comments';
import {ThemeProvider} from '@material-ui/core';
import { createMuiTheme} from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8c68',
      light: 'ffa386'
    },
    secondary: {
      main: '#ff1744',
      light:'#ff4569'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform:"none"
      }
    }
  }
})


function App() {


  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <div className="navbar-wrapper">
          <Navbar/>
        </div>

        <div className="class-title-wrapper">
        <ClassTitle />
    
        </div>
        <div className="emptyness-wrapper">

        </div>

        <div className="upcoming-event-wrapper">
          <UpcomingEvent />
        </div>

        <div className="comment-wrapper">
          <Comments /> 
        </div>

        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
