import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { getAllProductsFromDB } from '../helpers/getData.jsx';
/*CSS*/
import './styles/ItemListContainer.css';


const ItemListContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllProductsFromDB(setData);
  },[]);

    return (
      <section className="item-list-container">
        <h2 className="item-list-container__title">Productos destacados</h2>
  
        <ItemList products={data}/>
      </section>
    );
  };
  
  export default ItemListContainer;