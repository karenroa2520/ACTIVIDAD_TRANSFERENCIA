// Pedimos los datos al usuario
let producto = prompt("¿Qué producto compraste?");
let precio = parseFloat(prompt("¿Cuál es el precio del producto?"));
let cantidad = parseInt(prompt("¿Cuántas unidades compraste?"));

// Calculamos el total
let total = precio * cantidad;

// Mostramos el resultado
alert("El total a pagar por " + cantidad + " " + producto + " es: $" + total.toFixed(2));