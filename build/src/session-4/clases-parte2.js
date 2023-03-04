"use strict";
class ClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
let classWC = new ClassWithConstructor(10);
console.log(`classwc = ${JSON.stringify(classWC)}`);
