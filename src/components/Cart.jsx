import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="carrito-vacio">🛒 El carrito está vacío</h2>
        <div className="cart-buttons">
          <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Productos en el carrito</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <strong>{item.name}</strong> - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">
        <strong>Total:</strong> ${total}
      </p>

      <div className="cart-buttons">
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={() => navigate("/checkout")}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
