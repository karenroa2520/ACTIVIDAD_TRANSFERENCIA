// Preguntamos cuántas horas trabajó
let horas = prompt("¿Cuántas horas trabajaste esta semana?");

// Preguntamos cuánto le pagan por hora
let pagoPorHora = prompt("¿Cuánto te pagan por hora?");

// Convertimos las respuestas a números
horas = Number(horas);
pagoPorHora = Number(pagoPorHora);

// Calculamos el salario
let salario = horas * pagoPorHora;

// Mostramos el resultado
alert("Tu salario semanal es: $" + salario);