import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Code from '@material-ui/icons/Code';
import PropTypes from 'prop-types';

const Category = (props) => {
  const linkStyles = {
    color: '#2a2e31',
    textDecoration: 'none'
  }
  const listItemStyles = {
    marginBottom: '10px',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  }
  return(
    <div>
      <Link to={props.route} style={linkStyles}>
        <ListItem button style={listItemStyles} className='list-item'>
          <Code />
          <ListItemText primary={props.name} disableTypography={true} />
        </ListItem>
      </Link>
    </div>
  );
}

Category.propTypes = {
  route: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string
};

export default Category;
