import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {productList} from '../data/data';
import { useParams } from "react-router-dom";

/*CSS*/
import './styles/ItemListContainer.css';


const ItemListContainer = () => {
  const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])
    console.log(productos);
    return (
      <section className="item-list-container">
        <h2 className="item-list-container__title">Productos destacados</h2>
  
        <ItemList items={productos}/>
      </section>
    );
  };
  
  export default ItemListContainer;