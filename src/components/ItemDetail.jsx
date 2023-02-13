import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

import './styles/ItemDetail.css';

const ItemDetail = ({ item }) => {

  const cartContext = useContext(CartContext);
  const { addToCart} = cartContext;
  
  const onAdd = (qty) => {
    addToCart(item, qty)
  }

  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>          
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;
