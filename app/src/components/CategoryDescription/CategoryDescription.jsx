import React from 'react'
import { useParams } from 'react-router-dom'
import category from '../../data/category.json';
import goods from '../../data/goods.json';


const CategoryDescription = () => {
  
  
  const { catId } = useParams();
  const goodsArr = Object.values(goods).filter(item => item.category == catId);

  return (
    <div> 
      Сторінка категорії: {category[catId]['name']}
      <ul>
          {goodsArr.map((item) => (
            <li key={item.id}>
              <a href={`/category/${item.category}/${item.id}`}>{item.name+" "+ item.price+" грн"}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default CategoryDescription