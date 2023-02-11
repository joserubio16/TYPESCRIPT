"use strict";
let text = 'hola';
text = 'hola2';
console.log(text);
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(1, 3));
let a = '';
let booleanos = false;
let arreglos = ['hola', a, text];
let objetos = { id: 1, nombre: 'Pedro' };
// null no es lo mismo que void
let nulos = null;
function imprimirEnConsola(mensaje) {
    console.log(mensaje);
}
