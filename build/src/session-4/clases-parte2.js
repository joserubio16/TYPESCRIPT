"use strict";
class ClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
let classWC = new ClassWithConstructor(10);
console.log(`classwc = ${JSON.stringify(classWC)}`);
//clases
//clase publica
class ClassWithPublicProperty {
}
let myClassWithPublicP = new ClassWithPublicProperty();
myClassWithPublicP.id = 10;
//clase privada
class ClaseConPropiedadPrivada {
    constructor(id) {
        this.id = id;
    }
    print() {
        console.log(this.id);
    }
}
let miClasePrivada = new ClaseConPropiedadPrivada(11);
// nno se puede acceder a una propiuedad privada fuera de la clase, pero si uilizar metodos
// publicos para acceder a ellos
//miClasePrivada.id = 10
miClasePrivada.print();
