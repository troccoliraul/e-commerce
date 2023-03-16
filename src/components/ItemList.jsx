import Item from './Item';

import './styles/ItemList.css';


const ItemList = ({products}) => {

  return ( 
    <div className="product-list-container">
    {products.length ? (
      <>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Item
                name={product.name}
                thumbnail={product.thumbnail}
                price={product.price}
                stock={product.stock}
                id={product.id}
              />
            </div>
          );
        })}
      </>
    ) : (
      <img className="load-products" src={"https://media.giphy.com/media/PLWtp8kU6308htcQO0/giphy.gif"} />
    )}
  </div>
  );


};

export default ItemList;

