"use strict";
//metodo estatico se llaman directamente desde la clase sin crear objeto
//si crea objeto y se llama desde la instancia, marca error
class ClassStati {
    static printTwo() {
        console.log('2');
    }
}
ClassStati.printTwo();
//propiedades estaticas
class StaticProperty {
    updateContador() {
        StaticProperty.contador++;
    }
}
StaticProperty.contador = 0;
let myStaticProperty = new StaticProperty();
console.log(StaticProperty.contador);
myStaticProperty.updateContador();
console.log(StaticProperty.contador);
//el ambito de la propiedad estatica
// es el mismo para todo el codigo
//no importa que instancia lo modifique
let myStaticProperty2 = new StaticProperty();
myStaticProperty2.updateContador();
console.log(StaticProperty.contador);
