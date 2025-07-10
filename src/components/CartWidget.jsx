import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Carrito vacío',
        text: 'Aún no agregaste productos.',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Productos en el carrito',
        text: `Tenés ${total} producto(s) en tu carrito.`,
        showConfirmButton: true,
      }).then(() => {
        navigate("/cart");
      });
    }
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      🛒 {total}
    </span>
  );
};

export default CartWidget;
