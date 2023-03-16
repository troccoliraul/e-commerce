import React from "react";
import { Link } from 'react-router-dom';
import CartListItem from "../components/CartListItem";
import Checkout from "../components/Checkout";

const CartPage = () => {
  return (
    <main className="display-page">
      <h1>Tu carrito de compras</h1>
      <CartListItem />
      <Checkout/>
      <button>
        <Link to="/"> Volver atrás </Link>
      </button>
    </main>
  );
};

export default CartPage;
