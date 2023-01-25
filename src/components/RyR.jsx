import React from 'react';
import './styles/RyR.css'


const RyR = ({ title }) => {
    //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
  
    //la lógica va siempre antes del return
    return (
      <section className="ryr ryr-slide-1">
        <div className="ryr-container">
          <article className="ryr-container__text-box">
            <h1>{title}</h1>
            <p>
           <strong>RyR Store</strong>  es la tienda online más grande de Informatica de la region.
            </p>
            <p>Aquí encontraras todos los productos para tu PC o problemas de informatica</p>
            <button className="btn btn-danger">Comprar</button>
          </article>
        </div>
      </section>
    );
  };
  
  export default RyR;