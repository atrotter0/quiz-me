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
    name: 'JavaScript'
  },
  {
    name: 'Ruby'
  },
  {
    name: 'C#'
  },
  {
    name: 'Angular'
  },
  {
    name: 'React'
  },
  {
    name: 'Rails'
  },
  {
    name: 'ASP.NET'
  }
]
const Home = () => {
  return(
    <div className='page-content'>
      <p>Select a category from the list below:</p>
      <List>
      {categoryData.map((category, index) =>
        <Category
          name={category.name}
          key={index}
        />
      )}
      </List>
    </div>
  );
}

export default Home;
