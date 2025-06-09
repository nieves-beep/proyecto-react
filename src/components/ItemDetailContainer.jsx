import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
const [product, setProduct] = useState(null);
const { itemId } = useParams();

useEffect(() => {
    getProductById(itemId).then((res) => {
    setProduct(res);
    });
}, [itemId]);

return (
    <div>
    {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
);
}

export default ItemDetailContainer;
