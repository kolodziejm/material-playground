import React, { Component } from 'react';

import './global';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from  '@material-ui/icons/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">Material UI Playground</Typography>
            </Toolbar>
          </AppBar>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
