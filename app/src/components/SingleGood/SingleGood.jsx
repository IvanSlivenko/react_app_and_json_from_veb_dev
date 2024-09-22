import React from 'react'
import { useParams } from 'react-router-dom'
import category from '../../data/category.json';
import goods from '../../data/goods.json';

const SingleGood = () => {
    const {goodsId } = useParams();
    const goodsArr = Object.values(goods).filter(item => item.id == goodsId);

    

  return (
    <div>
        <div><h3> Назва товару : {goodsArr[0].name}</h3></div>
        <div><span>{"Ціна товару "+goodsArr[0].price}</span></div>
        <div><span>{goodsArr[0].description}</span></div>
    </div>
  )
}

export default SingleGood