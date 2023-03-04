"use strict";
class SimpleClass {
    print() {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 10;
mySimpleClass.print();
let mySimpleClassA = new SimpleClass();
mySimpleClassA.id = 30;
mySimpleClassA.print();
//implementacvion de interfaces
class ClassA {
    print() {
        console.log('ClassA.print() ha sido llamado');
    }
}
class ClassB {
    print() {
        console.log('ClassB.print() ha sido llamado');
    }
}
function printClass(a) {
    a.print();
}
let myClassA = new ClassA();
let myClassB = new ClassB();
printClass(myClassA);
printClass(myClassB);
