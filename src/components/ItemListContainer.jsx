import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../data/products";
import './ItemListContainer.css';

const ItemListContainer = ({ greetings }) => {
const { categoryId } = useParams();
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
    if (categoryId) {
        const filtered = data.filter((prod) => prod.category === categoryId);
        setProducts(filtered);
    } else {
        setProducts(data);
    }
    }).finally(() => {
        setLoading(false);
    });
}, [categoryId]);


if (loading) {
    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        color: '#AA73B6',
        }}
    >
        <div className="lds-heart"><div></div></div>
    </div>
    );
}

return (
    <div style={{ padding: "2rem" }}>
    <h2 style={{ textAlign: "center", color: "#a65fc2" }}>{greetings}</h2>

    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
        }}
        >
        <ItemList products={products} />
        </div>
    </div>
    </div>
);
};

export default ItemListContainer;
