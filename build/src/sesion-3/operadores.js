"use strict";
function printDtring(obj) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.descr : ${obj.descr}`);
    }
}
printDtring({ id: 1, name: 'juan' });
printDtring({ descr: 'test', value: 2 });
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty('name', { id: 1, name: 'juan' });
//getProperty('telephone', {id: 1, name: 'juan'})
