import React from "react";
import {useState} from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const buttonText = !inCart? "Add to Cart": "Remove from Cart"
  const itemClass = inCart? "in-cart": "";
  const handleCart = () => setInCart(!inCart);
    
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
