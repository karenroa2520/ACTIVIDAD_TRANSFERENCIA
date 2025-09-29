// Pedimos los minutos
let minutosTotales = prompt("Ingresa el número de minutos:");

// Convertimos a número
minutosTotales = Number(minutosTotales);

// Calculamos las horas (parte entera de la división)
let horas = Math.floor(minutosTotales / 60);

// Calculamos los minutos restantes
let minutos = minutosTotales % 60;

// Mostramos el resultado
alert(minutosTotales + " minutos son: " + horas + " horas y " + minutos + " minutos.");