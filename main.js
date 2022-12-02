//Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo.

let nombre = prompt('Ingresa tu nombre');
console.log('¡Hola' + ' ' + nombre + 'Bienvenido!');
alert('¡Hola' + ' ' + nombre + ' ' + 'Bienvenido!');


//Pedir un número mediante prompt, parsearlo, surmarlo a otro que se encuentre almacenado
//en una variable y luego mostrar el resultado en consola

let primerNumero = parseInt(prompt('A continuación ingrese un número para ser sumado a uno ya almacenado'));
let numeroAlmacenado = 5;

let resultado = primerNumero + numeroAlmacenado;
console.log(resultado);

alert('El resultado es' + ' ' + resultado);


//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en una alerta.

let textoA = prompt('Nombre');
let textoB = prompt('Apellido');

alert(textoA + ' ' + textoB);