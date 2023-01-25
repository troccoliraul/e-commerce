import React from "react";
/*css*/
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="bi bi-cart" size="2x" color="white">
                <div className="qty-display">0</div>
            </i>
        </div>
    );
};

export default CartWidget;