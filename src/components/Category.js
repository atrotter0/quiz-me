import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Code from '@material-ui/icons/Code';

const Category = (props) => {
  const linkStyles = {
    color: '#000',
    textDecoration: 'none'
  }
  return(
    <div>
      <Link to={props.route} style={linkStyles}>
        <ListItem button>
          <Code />
          <ListItemText primary={props.name} disableTypography={true} />
        </ListItem>
      </Link>
      <Divider />
    </div>
  );
}

export default Category;
