import React from 'react'
import { useParams } from 'react-router-dom'
import category from '../../data/category.json';

const CategoryDescription = () => {
  const { catId } = useParams();
  console.log(catId,'-- catId');
  
  



  return (
    <div> Сторінка категорії: {category[catId]['name']}</div>
  )
}

export default CategoryDescription