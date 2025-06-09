import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
const [count, setCount] = useState(initial);

const increase = () => {
    if (count < stock) setCount(count + 1);
};

const decrease = () => {
    if (count > 1) setCount(count - 1);
};

return (
    <div>
    <div>
        <button onClick={decrease}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={increase}>+</button>
    </div>
    <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
);
}

export default ItemCount;
