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
class ClassMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMods = new ClassMods(2, 'juan');
console.log(`myClassMods.id = ${myClassMods.id}`);
//da error ya que name es privado
//console.log(`myClassMods.id = ${myClassMods.name}`)
//readonly
class ClassWhitReadOnly {
    constructor(name) {
        this.name = name;
    }
}
let myClassReadonly = new ClassWhitReadOnly('juanb');
//no se puede modificar ni por dentro ni por fuera, solo leer 
//myClassReadonly.name= 'ivan'
console.log(myClassReadonly.name);
//getters Setters
class ClassWithAccesors {
    constructor() {
        this._id = 10;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let myClassWithAccesors = new ClassWithAccesors();
console.log(myClassWithAccesors.id);
myClassWithAccesors.id = 100;
console.log(myClassWithAccesors.id);
