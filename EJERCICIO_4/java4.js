// Pedimos los kilómetros recorridos
let kilometros = prompt("¿Cuántos kilómetros recorriste?");

// Pedimos el consumo por kilómetro (en litros por km)
let consumoPorKm = prompt("¿Cuántos litros usa el carro por kilómetro?");

// Convertimos las respuestas a números
kilometros = Number(kilometros);
consumoPorKm = Number(consumoPorKm);

// Calculamos los litros totales usados
let litrosTotales = kilometros * consumoPorKm;

// Mostramos el resultado
alert("El carro consumió " + litrosTotales + " litros en total.");