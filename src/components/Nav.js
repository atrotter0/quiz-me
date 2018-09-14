import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ImportContacts from '@material-ui/icons/ImportContacts';
import Button from '@material-ui/core/Button';

const Nav = () => {
  const navStyles = {
    position: 'static',
    backgroundColor: '#b4dcff',
  }
  const logoStyles = {
    marginTop: '0px',
    marginLeft: '50px',
    color: '#2a2e31',
    fontSize: '3.5em',
  }
  const headerStyles = {
    marginTop: '20px',
    marginLeft: '45px',
    fontSize: '2em',
    letterSpacing: '3px',
    fontFamily: 'Oswald, sans-serif'
  }
  const navLinkBoxStyles = {
    flexGrow: '1',
    marginLeft: '25px'
  }
  const linkStyles = {
    color: '#2a2e31',
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
          <ImportContacts style={logoStyles}/>
          <h2 style={headerStyles}>
            <Link to='/' style={linkStyles}>Quiz Me!</Link>
          </h2>
          <div style={navLinkBoxStyles}>
            <Link to='/' style={linkStyles}>
              <Button color='inherit' size='large' style={buttonStyles}>
                How To
              </Button>
            </Link>
            <Link to='/categories' style={linkStyles}>
              <Button color='inherit' size='large' style={buttonStyles}>
                Categories
              </Button>
            </Link>
            <Link to='/add-card' style={linkStyles}>
              <Button color='inherit' style={buttonStyles}>
                Add Card
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
