"use strict";
class NumberClass {
    constructor() {
        this.name = 'test';
        // si no declaramos todas las propiedades de las interfaces
        //marcara error
        this.id = 0;
    }
}
let myStringId = { id: 'hola' };
let myMultiple = {
    id: 1,
    name: 'juan',
    print: () => {
        console.log('hola');
    },
    lastName: 'uribe'
};
// ------------------------ Herencia en clases ----------------------
// una clase solo puede heredar una clase pero una clase
//puede heredar multiples interfaces con implements
// la diferencia de herencia de interfaces y clases, es que en las
//clases si permite heredar solo una propiedad u otra
// en las interfaces si es necesario definir las propiedades que se heredan
class BaseClass {
    constructor() {
        this.id = 1;
    }
}
class MyClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = '';
    }
}
let myClass = {
    id: 10,
    name: 'juanillo'
};
