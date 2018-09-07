import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Code from '@material-ui/icons/Code';

const Category = (props) => {
  return(
    <div>
      <ListItem button>
        <Code />
        <ListItemText primary={props.name} disableTypography={true}/>
      </ListItem>
      <Divider />
    </div>
  );
}

export default Category;
