import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import {productList} from '../data/data';
import { useParams } from "react-router-dom";

import './styles/Products.css';

const Products = () => {

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
        <main className="products-page-container">
            <ItemList items={productos}/>
        </main>
    )
}

export default Products
