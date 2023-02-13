import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
/*css*/
import './styles/CartWidget.css'

const CartWidget = () => {
    //la lógica va siempre antes del return
  
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
  
    return (
      <div className="cart-widget">
        {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white"/>
        <div className="qty-display">{cart.length}</div>
      </div>
    );
  };
  
  export default CartWidget;