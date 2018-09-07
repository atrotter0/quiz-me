import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ImportContacts from '@material-ui/icons/ImportContacts';

const Nav = () => {
  const navStyles = {
    position: 'static'
  }
  const logoStyles = {
    color: '#fff',
    fontSize: '1.5em',
  }
  const headerStyles = {
    marginLeft: '10px'
  }
  const navLinkBoxStyles = {
    flexGrow: '1',
    marginLeft: '30px'
  }
  const linkStyles = {
    color: '#fff',
    textDecoration: 'none'
  }
  return(
    <div>
      <AppBar style={navStyles}>
        <Toolbar>
          <IconButton>
            <ImportContacts style={logoStyles}/>
          </IconButton>
          <h2 style={headerStyles}>
            <Link to='/' style={linkStyles}>Quiz Me!</Link>
          </h2>
          <div style={navLinkBoxStyles}>
            <Link to='/categories' style={linkStyles}>Categories</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
