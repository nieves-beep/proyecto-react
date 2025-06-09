export const products = [
{
    id: 1,
    title: "Sombra Gege Bear",
    price: 8500,
    category: "ojos",
    stock: 10,
    img: "/assets/sombra.liquida.gegebear.png",
},
{
    id: 2,
    title: "Rubor Sheglam",
    price: 7000,
    category: "rostro",
    stock: 15,
    img: "/assets/sheglam.rubor.webp",
},
{
    id: 3,
    title: "Sombra de ojos",
    description: "Paleta de sombras Peripera",
    price: 10000,
    category: "ojos",
    stock: 20,
    img: "/assets/peripera.sombras.webp",
},
{
    id: 4,
    title: "Romand tinta labial",
    price: 20000,
    category: "labis",
    stock: 12,
    img: "/assets/romand.tint.png",
},
{
    id: 5,
    title: "Labial Gege Bear",
    price: 25000,
    category: "labios",
    stock: 18,
    img: "/assets/lip.cream.gege.bear.png",
},
{
    id: 6,
    title: "Rubor Lily by red",
    price: 15000,
    category: "rostro",
    stock: 25,
    img: "/assets/lily.cheek.balm.png",
},
];


export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find((p) => p.id === parseInt(id)));
    }, 500);
});
};

export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 500);
});
};
