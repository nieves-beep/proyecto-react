import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card">
      <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>${price}</p>
      <Link to={`/item/${id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
};

export default Item;
