//Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

console.log(producto.mostrarInfo() );

//Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const productoDos = new Producto('Monitor 24 pulgadas', 500);
console.log(productoDos);

const productoTres = new Producto('Television', 100);
console.log(productoTres);