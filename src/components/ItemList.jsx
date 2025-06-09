import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
if (!products || !Array.isArray(products)) {
    return <p>Cargando productos...</p>;
}

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    justifyItems: 'center',
};

return (
    <div style={containerStyle}>
    {products.map((product) => (
        <Item key={product.id} {...product} />
    ))}
    </div>
);
};

export default ItemList;
