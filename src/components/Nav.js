import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ImportContacts from '@material-ui/icons/ImportContacts';
import Button from '@material-ui/core/Button';

const Nav = () => {
  const navStyles = {
    position: 'static',
    backgroundColor: '#106596',
  }
  const logoStyles = {
    marginTop: '0px',
    color: '#fffffc',
    fontSize: '2em'
  }
  const headerStyles = {
    marginTop: '20px',
    marginLeft: '25px',
    fontSize: '2em',
    letterSpacing: '3px',
    fontFamily: 'Oswald, sans-serif'
  }
  const navLinkBoxStyles = {
    flexGrow: '1',
    marginLeft: '25px'
  }
  const linkStyles = {
    color: '#fffffc',
    textDecoration: 'none',
    marginRight: '20px'
  }
  const buttonStyles = {
    fontSize: '1em',
    fontFamily: 'Oswald, sans-serif'
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
            <Link to='/categories' style={linkStyles}>
              <Button color='inherit' size='large' style={buttonStyles}>
                Categories
              </Button>
            </Link>
            <Link to='/' style={linkStyles}>
              <Button color='inherit' size='large' style={buttonStyles}>
                About
              </Button>
            </Link>
            <Link to='/' style={linkStyles}>
              <Button color='inherit' style={buttonStyles}>
                Contact
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
