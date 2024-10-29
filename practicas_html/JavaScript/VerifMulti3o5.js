let numero = prompt("Ingresa un número:");
numero = Number(numero);
if (isNaN(numero)) {
  console.log("Por favor, ingresa un valor numérico válido.");
} else if (numero % 3 === 0 & numero % 5 === 0) {
  console.log(numero + " es múltiplo de 3 y 5");
} else if (numero % 5 === 0) {
  console.log(numero + " es múltiplo de 5");
} else if (numero % 3 === 0) {
  console.log(numero + " es múltiplo de 3");
} else {
  console.log(numero + " no es múltiplo de 3 ni de 5");
}
