const producto1 = {
    nombre: "Vegan Burger",
    marca: "Radhahari",
    precio: 1500,
    stock: 500
};


// console.log(producto1.nombre);


for (let propiedad in producto1) {
    console.log(producto1[propiedad]);
};