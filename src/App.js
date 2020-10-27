import React from 'react';
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
      main: '#ff7043',
    },
    secondary: {
      main: '#f50057',
    }
  }
})


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <div className="navbar-wrapper">
          <Navbar />
        </div>

        <div className="class-title-contaniner">
        <ClassTitle />
    
        </div>
        <div className="emptyness-contaniner">

        </div>

        <div className="upcoming-event-contaniner">
          <UpcomingEvent />
        </div>

        <div className="comment-container">
          <Comments /> 
        </div>

        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
