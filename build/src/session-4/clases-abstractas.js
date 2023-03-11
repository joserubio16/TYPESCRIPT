"use strict";
class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Perro extends Animal {
    ladrar() { }
    reproducirse(pareja) {
        // Guardar o crear un nuevo perro en la BD
    }
}
class Pulpo extends Animal {
    nadar() { }
    reproducirse(pareja) {
        //
    }
}
let myOfficeWorker = new Perro(1, 'frank');
