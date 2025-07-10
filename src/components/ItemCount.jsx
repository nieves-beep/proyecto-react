import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({ stock, initial = 1, onAdd }) => {
const [count, setCount] = useState(initial);

const sumar = () => {
    if (count < stock) setCount(count + 1);
};

const restar = () => {
    if (count > 1) setCount(count - 1);
};

return (
<div className="item-count-container">
    <button className="item-count-button" onClick={restar}>-</button>
    <span className="item-count-value">{count}</span>
    <button className="item-count-button" onClick={sumar}>+</button>
    <button className="item-count-add" onClick={() => onAdd(count)}>Agregar</button>
</div>
);

};

export default ItemCount;
