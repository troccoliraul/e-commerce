import React from 'react';
import { Link , useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';

import './styles/DetailPage.css';

const DetailPage = () => {
  let { id } = useParams();

  id = parseInt(id);

  return (
    <main className="detail-page-container">
      <ItemDetailContainer id={id} />
      <Link to="/products"> Volver atrás </Link>
    </main>
  );
};

export default DetailPage;