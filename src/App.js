import React, { Component } from 'react';

import './global';
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar';
import { MuiThemeProvider } from '@material-ui/core';

import theme from './theme';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </MuiThemeProvider>
    );
  }
}

export default App;
