"use strict";
let tupla1;
tupla1 = ['hola', true];
// las siguientes asignaciones nos dan error
// poor que una tupla typescript la considera fuertemente
//tupla1 = ['holña']
//tupla1 = ['holña',  false, 'hola']
//tupla1 = [false, 'holña']
let [tuplaString, tuplaBoolean] = tupla1;
console.log(tuplaString);
console.log(tuplaBoolean);
let complexObj = {
    aNum: 1,
    bStr: 'name',
    cBool: true
};
/*
para desestructurar un objeto es necesario que las
variables se llaman igual que las propiedades
no importa el orden
*/
let { aNum, bStr, cBool } = complexObj;
console.log(aNum);
console.log(bStr);
console.log(cBool);
