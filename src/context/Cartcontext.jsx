import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (item, quantity) => {
    const itemExistente = cart.find(prod => prod.id === item.id);

    if (itemExistente) {
    setCart(cart.map(prod =>
        prod.id === item.id
        ? { ...prod, quantity: prod.quantity + quantity }
        : prod
    ));
    } else {
    setCart([...cart, { ...item, quantity }]);
    }
};

const clearCart = () => setCart([]);

return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
    {children}
    </CartContext.Provider>
);
};
