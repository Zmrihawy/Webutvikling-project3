import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar'



class MainBar extends Component {
  render() {
    return (
      <div>
       <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="subtitle1"
              color="inherit"
              style={{paddingRight: '1.5em',
                  marginRight: '1em',
                  borderRight: '0.05em solid rgba(255, 255, 255, 0.5)'}}
            >
              My NavBar
              
           </TypoGraphy>
          
          <NavBar />
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
export default MainBar;
