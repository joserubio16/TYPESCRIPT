"use strict";
let myCallback = (text) => {
    console.log('myCallback is called with: ' + text);
};
let myCallback2 = (frase) => {
    console.log('myCallback is called with: ' + frase);
};
/*
El tipado de las funciones ignora el nombre de los
parametros pero no la cantidad o el tipo d valor
de los mismos
*/
function withCallbackArg(message, callbackfn) {
    console.log('withCallback called, message ' + message);
    callbackfn(message + ' from withCallback');
}
//console.log(myCallback('initial text'))
//no da error
console.log(withCallbackArg('initial text', myCallback));
console.log(withCallbackArg('initial text2', myCallback2));
//da error poor que espera q sea una funcion
//console.log(withCallbackArg('initial text', 'myCallback'))
