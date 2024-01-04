nombre = "Hola";
precio = 20;

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const productoDos = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfor: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
productoDos.mostrarInfo();