import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

import './styles/CartListItem.css'

const CartListItem = () => {
    const cartContext = useContext(CartContext);
    const { cart, deleteCartById, deleteCart } = cartContext;

    return (
        <>
            <div className='list-cart'>
            {cart ? (cart.map( product => {
                return(
                    <div key={product.id}>
                     <CartItem
                                  id={product.id} 
                                  item={product} 
                                  deleteCartById={deleteCartById} 
                        />
                    </div>);
                }))
                  : <p>cargando productos</p>
            }
            </div>
            {cart.length ? (<button 
                            className="button-primary button-padding"
                            onClick={deleteCart}
                      >Vaciar Carrito</button>)
                         : <p>No hay productos en el carrito</p>
            }
            
        </>
    )
}

export default CartListItem