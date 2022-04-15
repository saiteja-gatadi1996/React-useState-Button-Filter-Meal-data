import React, { useState } from 'react';
import items from './data';

//when the data.js gets bigger with lot of other categories, we cannot hardcode.

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
  const [data, setData] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterBasedOnCategory = (category) => {
    if (category === 'all') {
      setData(items);
      return;
    }
    const filteredCategoryData = items.filter(
      (item) => item.category === category
    );
    setData(filteredCategoryData);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
          {categories.map((category) => (
            <button
              className='filter-btn'
              onClick={() => filterBasedOnCategory(category)}
            >
              {category}
            </button>
          ))}
          {data.map((dataItem) => {
            const { id, title, category, price, img, desc } = dataItem;
            return (
              <div key={id}>
                <img className='photo' src={img} alt={title} />
                <h2>{title}</h2>
                <h3>{category}</h3>
                <h4>{price}</h4>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
