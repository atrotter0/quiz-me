import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Style from '@material-ui/icons/Style';

const Nav = () => {
  const logoStyles = {
    color: '#fff',
    fontSize: '1.5em',
  }
  const headerStyles = {
    marginLeft: '10px'
  }
  const navLinkBoxStyles = {
    outline: '1px solid red',
    flexGrow: '1',
    marginLeft: '30px'
  }
  const linkStyles = {
    color: '#fff'
  }
  return(
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Style style={logoStyles}/>
          </IconButton>
          <h2 style={headerStyles}>Quiz Me!</h2>
          <div style={navLinkBoxStyles}>
            <Link to='/html-css' style={linkStyles}>HTML/CSS</Link>
            <Link to='/javascript' style={linkStyles}>JavaScript</Link>
            <Link to='/ruby' style={linkStyles}>Ruby</Link>
            <Link to='/csharp' style={linkStyles}>C#</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
