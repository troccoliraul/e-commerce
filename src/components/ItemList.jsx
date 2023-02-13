import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getAllProductsFromDB } from '../helpers/getData.js';

import './styles/ItemList.css';


const ItemList = ({items}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getAllProductsFromDB(setProducts);
  // }, []);

  // return (
  //   <div className="product-list-container">
  //     {products.length ? (
  //       <>
  //         {products.map((product) => {
  //           return (
  //             <div key={product.id}>
  //               <Item 
  //                 // name={product.name}
  //                 // thumbnail={product.thumbnail}
  //                 // price={product.price}
  //                 // stock={product.stock}
  //                 // id={product.id}
  //               />
  //             </div>
  //           );
  //         })}
  //       </>
  //     ) : (
  //       <img className="load-beer" src={"https://media.giphy.com/media/PLWtp8kU6308htcQO0/giphy.gif"} />
  //     )}
  //   </div>
  // );


  return(
    <div className="product-list-container">
        {
            items.map(product=>(
                    <Item name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}/>
            ))
        }
    </div>
)


};

export default ItemList;

