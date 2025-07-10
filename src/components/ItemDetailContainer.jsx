import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);
const { itemId } = useParams();

useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
    .then((resp) => {
        setProducto({ id: resp.id, ...resp.data() });
    })
    .finally(() => setLoading(false));
}, [itemId]);

if (loading || !producto) {
return <p>Cargando producto...</p>;
}

return <ItemDetail producto={producto} />;

};

export default ItemDetailContainer;
