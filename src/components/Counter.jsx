import React, { useState } from 'react';
import './Counter.css';

function Counter() {
const [cantidad, setCantidad] = useState(1);

return (
    <div className="counter-container">
    <button className="counter-button" onClick={() => setCantidad(cantidad - 1)}>-</button>

    <span className="counter-value">{cantidad}</span>

    <button className="counter-button" onClick={() => setCantidad(cantidad + 1)}>+</button>

    <button className="add-button" onClick={() => alert(`Agregado ${cantidad} al carrito`)}>
        Agregar
    </button>
    </div>
);
}

export default Counter;
