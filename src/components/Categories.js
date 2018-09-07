import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';

const categoryData = [
  {
    route: '/categories/html-css',
    name: 'HTML/CSS'
  },
  {
    route: '/categories/javascript',
    name: 'JavaScript'
  },
  {
    route: '/categories/ruby',
    name: 'Ruby'
  }
]
const Categories = () => {
  return(
    <div className='page-content'>
      <List>
      {categoryData.map((category, index) =>
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
