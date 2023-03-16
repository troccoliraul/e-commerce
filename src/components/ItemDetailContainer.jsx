import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/getData.jsx';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id, setProduct);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;