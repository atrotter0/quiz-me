import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';

const categoryData = [
  {
    route: '/category/html-css',
    name: 'HTML/CSS'
  },
  {
    route: '/category/javascript',
    name: 'JavaScript'
  },
  {
    route: '/category/ruby',
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
