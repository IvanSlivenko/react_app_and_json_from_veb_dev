import React from 'react'

import category from '../../data/category.json'

const Сategory = () => {
  return (
    <div>
      <h3>Категорії</h3>
      <ul>
        {Object.values(category).map((item) => (
          <li key={item.id}>
            <a href={`/category/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default Сategory