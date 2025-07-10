import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
const { addToCart } = useContext(CartContext);
const [added, setAdded] = useState(false);

const handleAdd = (cantidad) => {
    const itemAgregado = { ...producto, cantidad };
    addToCart(itemAgregado, cantidad);
    setAdded(true);

    Swal.fire({
    icon: "success",
    title: "Producto agregado",
    text: `Agregaste ${cantidad} unidad(es) de "${producto?.name}" al carrito.`,
    timer: 2000,
    showConfirmButton: false,
    });
};

return (
    <div className="item-detail-wrapper">
    <div className="item-detail-layout">
        <div className="item-detail-left">
        <img src={producto.img} alt={producto.name} className="item-detail-image" />
        </div>
        <div className="item-detail-right">
        <h2 className="item-detail-title">{producto.name}</h2>
        <p className="item-detail-description">{producto.description}</p>
        <p className="item-detail-price">${producto.price}</p>
        <p className="item-detail-stock">Stock disponible: {producto.stock}</p>

        {added ? (
            <p className="item-detail-added">✔ Producto agregado al carrito</p>
        ) : (
            <div className="item-detail-actions">
            <ItemCount stock={producto.stock} onAdd={handleAdd} />
            </div>
        )}
        </div>
    </div>
    </div>
);
};

export default ItemDetail;
