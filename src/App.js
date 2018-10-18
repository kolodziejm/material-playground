import React, { Component } from 'react';

import './global';
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar';
import { MuiThemeProvider } from '@material-ui/core';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import theme from './theme';
import Home from './containers/Home';
import About from './containers/About';
import Stats from './containers/Stats';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/stats" component={Stats} />
            <Route path="/" component={Home} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
