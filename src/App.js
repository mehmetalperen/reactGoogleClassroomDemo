import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ClassHomePage from './Pages/ClassHomePage';
import ClassesPage from './Pages/ClassesPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';

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
      <Router>
        <div className="App">
          <div className="navbar-wrapper">
            <Navbar/>
          </div>
          <Switch>
            
            <Route path='/classes' exact component={ClassesPage} />
            <Route path='/classHome/:id' component={ClassHomePage} />
            
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
