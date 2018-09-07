const fetchAllCategories = () => {
  const categories = [
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
  return categories;
}

export default fetchAllCategories;
