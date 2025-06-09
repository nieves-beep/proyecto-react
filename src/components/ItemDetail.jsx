import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades de ${item.title}`);
};

return (
    <div className="card">
    <div className="card-image-container">
        <img src={item.img} className="card-image" width="150" height="150" alt="product" />
    </div>
    <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-price">${item.price}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
    </div>
    </div>
);
}

export default ItemDetail;
