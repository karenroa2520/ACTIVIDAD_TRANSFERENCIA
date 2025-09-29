// Pedimos la edad de la primera persona
let edad1 = prompt("Edad de la primera persona:");
// Pedimos la edad de la segunda persona
let edad2 = prompt("Edad de la segunda persona:");
// Pedimos la edad de la tercera persona
let edad3 = prompt("Edad de la tercera persona:");
// Pedimos la edad de la cuarta persona
let edad4 = prompt("Edad de la cuarta persona:");

// Convertimos todo a números
edad1 = Number(edad1);
edad2 = Number(edad2);
edad3 = Number(edad3);
edad4 = Number(edad4);

// Sumamos todas las edades
let suma = edad1 + edad2 + edad3 + edad4;

// Calculamos el promedio (dividimos entre 4)
let promedio = suma / 4;

// Mostramos el resultado
alert("El promedio de edad es: " + promedio);