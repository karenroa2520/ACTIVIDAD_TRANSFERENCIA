// Pedimos la distancia en kilómetros
let distancia = prompt("¿Cuántos kilómetros tiene el recorrido?");

// Pedimos la velocidad promedio en km/h
let velocidad = prompt("¿Cuál es la velocidad promedio (en km/h)?");

// Convertimos las respuestas a números
distancia = Number(distancia);
velocidad = Number(velocidad);

// Calculamos el tiempo: tiempo = distancia / velocidad
let tiempo = distancia / velocidad;

// Mostramos el resultado
alert("El tiempo estimado del viaje es: " + tiempo + " horas.");