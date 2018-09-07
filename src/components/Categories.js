import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';
import fetchAllCategories from '../services/categoryDataService';

const Categories = () => {
  const categories = fetchAllCategories();
  return(
    <div className='page-content'>
      <List>
      {categories.map((category, index) =>
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
