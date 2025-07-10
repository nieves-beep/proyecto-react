export const products = [
{
    id: "vVsALbR6OXAMByohP7Tk",
    name: "Sombra Gege Bear",
    price: 8500,
    category: "ojos",
    stock: 10,
    img: "/assets/sombra.liquida.gegebear.png",
},
{
    id: "VrWdLK4dGb1IDt4YTh2b",
    name: "Rubor Sheglam",
    price: 7000,
    category: "rostro",
    stock: 15,
    img: "/assets/sheglam.rubor.webp",
},
{
    id: "cZoLy8l3OESx3Hy9Ga00",
    name: "Sombra de ojos",
    description: "Paleta de sombras Peripera",
    price: 10000,
    category: "ojos",
    stock: 20,
    img: "/assets/peripera.sombras.webp",
},
{
    id: "3mznWHUXlun950juv860",
    name: "Romand tinta labial",
    price: 20000,
    category: "labis",
    stock: 12,
    img: "/assets/romand.tint.png",
},
{
    id: "7czjINqVUjiyjcBjyWQO",
    name: "Labial Gege Bear",
    price: 25000,
    category: "labios",
    stock: 18,
    img: "/assets/lip.cream.gege.bear.png",
},
{
    id: "yp15oXkIrh3bU8mhNaNF",
    name: "Rubor Lily by red",
    price: 15000,
    category: "rostro",
    stock: 25,
    img: "/assets/lily.cheek.balm.png",
},
];


export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find((p) => p.id === id));
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
