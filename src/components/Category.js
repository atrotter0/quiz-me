import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Category = (props) => {
  const categoryBoxStyle = {
    margin: '0',
    padding: '0'
  }
  return(
    <div style={categoryBoxStyle}>
      <ListItem button>
        <ListItemText primary={props.name} />
      </ListItem>
      <Divider />
    </div>
  );
}

export default Category;
