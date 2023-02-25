"use strict";
let firstObj = { id: 1, name: 'firstObj' };
let secondObj = Object.assign({}, firstObj);
console.log('secondObjt: ' + JSON.stringify(secondObj));
let nameObj = { name: 'nameOnj' };
let idObj = { id: 2 };
let obj3 = Object.assign(Object.assign({}, nameObj), idObj);
console.log(obj3);
//propagacion de arreglos 
let firstArry = [1, 2, 3];
let secondArry = [3, 4, 5];
let thirdArry = [...firstArry, ...secondArry];
console.log('thirdArry = ' + thirdArry);
