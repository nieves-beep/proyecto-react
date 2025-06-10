import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../data/products";

const ItemListContainer = ({ greetings }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtered = data.filter((prod) => prod.category === categoryId);
        setProducts(filtered);
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
