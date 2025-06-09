import React, { useEffect, useState } from 'react';
import { getProducts } from '../data/products.js';
import ItemList from './ItemList';

const ItemListContainer = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts().then((data) => {
    setProducts(data);
    });
}, []);

return (
    <div style={{ padding: '2rem' }}>
    <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
