"use strict";
var myIdObject = { name: 'myName', id: 1, print() { } };
myIdObject = { id: 2, name: 'otherName', print() { } };
/*la siguiente asignacion da error por que
el tipado pato garantiza que el tipado de
objeto sea el mismo
*/
//myIdObject = {id: 2, name: 'otherName'}
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2;
//da error por que al objeto 1 le hace falta la propiedad select
//obj2 = obj1
