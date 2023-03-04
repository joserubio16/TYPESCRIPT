class ClassWithConstructor {
    id: number;
    constructor(_id: number) {
        this.id = _id
    }
}

let classWC = new ClassWithConstructor(10)

console.log(`classwc = ${JSON.stringify(classWC)}`)