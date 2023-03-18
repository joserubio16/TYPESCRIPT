"use strict";
//operador keyof
let myPersonPropertyName = "id";
//restricciones genericas
function printProperty(object, key) {
    let propertyValue = object[key];
    console.log(`object[${String(key)}] = ${propertyValue}`);
}
const object1 = {
    id: 1,
    name: "my name test",
    print() { console.log("HOLA"); }
};
printProperty(object1, "id");
printProperty(object1, "name");
