import React from 'react';

const Item = ({ id, title, price, img }) => {
const cardStyle = {
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#fff',
};

const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '5px',
};

const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: '1rem 0 0.5rem',
    color: '#AA73B6',
};

const priceStyle = {
    fontSize: '1rem',
    color: '#AA73B6',
    marginBottom: '1rem',
};

const buttonStyle = {
    backgroundColor: '#f2d4f6',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#AA73B6',
};

return (
    <div style={cardStyle}>
    <img src={img} alt={title} style={imageStyle} />
    <h3 style={titleStyle}>{title?.toUpperCase() || 'Producto'}</h3>
    <p style={priceStyle}>${price}</p>
    <button style={buttonStyle}>Agregar al carrito</button>
    </div>
);
};

export default Item;
