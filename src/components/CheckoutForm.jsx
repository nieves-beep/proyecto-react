import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckoutForm = () => {
const { cart, clearCart } = useContext(CartContext);

const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [email, setEmail] = useState("");
const [orderId, setOrderId] = useState(null);

const db = getFirestore();

const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !email) {
    alert("Faltan datos");
    return;
    }

    const order = {
    buyer: { nombre, telefono, email },
    items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
    })),
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: Timestamp.fromDate(new Date()),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
    .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();

        Swal.fire({
        title: "¡Gracias por tu compra! 💖",
        text: `Tu número de orden es: ${docRef.id}`,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#AA73B6",
        background: "#F8EDF8",
        });
    })
    .catch((error) => {
        console.error("Error al generar la orden", error);
    });
};

if (orderId) {
    return null;
}

return (
    <div className="checkout-container">
    <h2>Finalizar compra</h2>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        maxLength={15}
        onChange={(e) => {
        const value = e.target.value;
        if (/^\+?\d*$/.test(value)) {
        setTelefono(value);
        }
        }}
        inputMode="numeric"
        />
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Confirmar compra</button>
    </form>
</div>
);
};

export default CheckoutForm;
