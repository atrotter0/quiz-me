import React from 'react';
import Category from './Category';
import List from '@material-ui/core/List';

const categoryData = [
  {
    logoUrl: '../',
    name: 'HTML/CSS'
  },
  {
    logoUrl: '../',
    name: 'JavaScript'
  },
  {
    logoUrl: '../',
    name: 'Ruby'
  },
  {
    logoUrl: '../',
    name: 'C#'
  },
  {
    logoUrl: '../',
    name: 'Angular'
  },
  {
    logoUrl: '../',
    name: 'React'
  },
  {
    logoUrl: '../',
    name: 'Rails'
  },
  {
    logoUrl: '../',
    name: 'ASP.NET'
  }
]
const Home = () => {
  return(
    <div className='page-content'>
      <p>Select a category from the list below to begin viewing questions for the specified category:</p>
      <List>
      {categoryData.map((category, index) =>
        <Category
          logoUrl={category.logoUrl}
          name={category.name}
          key={index}
        />
      )}
      </List>
    </div>
  );
}

export default Home;
