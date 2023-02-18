"use strict";
function printObject(obj) {
    console.log(obj);
}
printObject(1);
printObject('hola');
function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string') {
        //arg 1 
        console.log(`arg1 es un string`);
        return arg1 + arg2;
    }
}
console.log(addWithUnion('hola', 'mundo'));
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
