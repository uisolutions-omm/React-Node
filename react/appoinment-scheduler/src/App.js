import React, { Component } from 'react';
import AppointmentApp from './components/AppointmentApp';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
                
                  <MuiThemeProvider>
                  <AppointmentApp />
                </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
