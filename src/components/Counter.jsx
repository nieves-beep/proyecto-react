import React, { useState } from 'react';
import './Counter.css';

function Counter() {
const [cantidad, setCantidad] = useState(1);

return (
    <div style={{ display: "flex", gap: "1rem" }}>
    <button
        className="btn btn-secondary"
        onClick={() => setCantidad(cantidad - 1)}
    >
        -
    </button>

    <p>{cantidad}</p>

    <button
        className="btn btn-secondary"
        onClick={() => setCantidad(cantidad + 1)}
    >
        +
    </button>
    </div>
);
}

export default Counter;

