import React from 'react'
import category from '../../data/category.json'

const Nav = () => {
  return (
    <div>
        <nav>
        <h3> nav</h3>
        <ul>
          {Object.values(category).map((item) => (
            <li key={item.id}>
              <a href={`/category/${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav