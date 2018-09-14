import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';

const Categories = (props) => {
  return(
    <div className='page-content'>
      <List>
      {props.categories.map((category, index) =>
        <Category
          route={category.route}
          name={category.name}
          key={index}
        />
      )}
      </List>
    </div>
  );
}

export default Categories;
