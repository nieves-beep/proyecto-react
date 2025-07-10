import React from 'react';
import Item from './Item';
import './ItemList.css';
const ItemList = ({ products }) => {
const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    justifyItems: 'center',
};

if (!products || !Array.isArray(products)) {
    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        color: '#AA73B6',
        }}
    >
        <div className="lds-heart"><div></div></div>
    </div>
    );
}

return (
    <div style={containerStyle}>
    {products.map((product) => (
        <Item key={product.id} {...product} />
    ))}
    </div>
);
};

export default ItemList;
