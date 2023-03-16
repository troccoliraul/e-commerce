import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";
import { getAllProductsFromDB } from '../helpers/getData.jsx';

import './styles/Products.css';

const Products = () => {
    const { tipoProducto } = useParams();
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([])

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })

    useEffect(() => {
        getAllProductsFromDB(setData);
        promesa.then(resultado => {
            if (!tipoProducto) {
                setProducts(resultado)
            } else {
                const nuevaLista = resultado.filter(item => item.category === tipoProducto);
                setProducts(nuevaLista)
            }
        })
    }, [promesa, tipoProducto]);

    return (
        <main className="products-page-container">
            <ItemList products={products} />
        </main>
    )
}

export default Products
