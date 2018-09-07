import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';

const categoryData = [
  {
    name: 'HTML/CSS',
    questions: [
      
    ]
  },
  {
    name: 'JavaScript',
    questions: [
      
    ]
  },
  {
    name: 'Ruby',
    questions: [
      
    ]
  },
  {
    name: 'C#',
    questions: [
      
    ]
  },
  {
    name: 'Angular',
    questions: [
      
    ]
  },
  {
    name: 'React',
    questions: [
      
    ]
  },
  {
    name: 'Rails',
    questions: [
      
    ]
  },
  {
    name: 'ASP.NET',
    questions: [
      
    ]
  }
]
const Categories = () => {
  return(
    <div className='page-content'>
      <List>
      {categoryData.map((category, index) =>
        <Category
          name={category.name}
          questions={category.questions}
          key={index}
        />
      )}
      </List>
    </div>
  );
}

export default Categories;
