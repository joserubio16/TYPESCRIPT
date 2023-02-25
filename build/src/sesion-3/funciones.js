"use strict";
const sumaNumeros = (a, b) => {
    return a + b;
};
console.log(sumaNumeros(2, 3));
//parametro opcional
const concatValues = (a, b) => {
    return console.log('a+b = ' + a + b);
};
concatValues('primero', 'segundo');
concatValues('primero');
//parametro por defecto
const concatWithDefaultValues = (a, b = 'hola') => {
    return console.log('a+b = ' + a + b);
};
concatWithDefaultValues('primero', 'segundo');
concatWithDefaultValues('primero');
