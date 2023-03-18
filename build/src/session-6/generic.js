"use strict";
function printGeneric(value) {
    console.log(`typeof T es: ${typeof value}`);
    console.log(`value es: ${value}`);
}
// si eswpecificamos el tipado de T el parametro espera
// el mismo tipo
//printGeneric<string>(1)
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
// podemos definir n tipados genericos, pero se recomienda
//que sea menor o iguial a la cantidad de parametros 
// que tenga la funcion
function usingTwoTypes(first, second) {
}
//al especificar el tipado, debemos señalar todos los tipos
// genericos definidos
usingTwoTypes(1, 2);
usingTwoTypes(1, "test");
usingTwoTypes("test", true);
class Concatenator {
    concatenarArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i === 0 ? "" : ",";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
let myConcatenator = new Concatenator;
let concatResult = myConcatenator.concatenarArray([
    "first", "second", "third"
]);
console.log(concatResult);
concatResult = myConcatenator.concatenarArray([
    1, 2, 3
]);
console.log(concatResult);
function useT(item) {
    //no lo permite porq  la pripiedad no es comun en la interface
    //  item.id
    //  item.id
}
