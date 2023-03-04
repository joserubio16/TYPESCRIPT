class SimpleClass{
    id: number | undefined;
    print(): void{
        console.log(`SimpleClass.id = ${this.id}`)
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 10
mySimpleClass.print()

let mySimpleClassA = new SimpleClass();
mySimpleClassA.id = 30
mySimpleClassA.print()


//implementacvion de interfaces
class ClassA implements Print {
    print(){
        console.log('ClassA.print() ha sido llamado')
    }
}

class ClassB implements Print{
    print(){
        console.log('ClassB.print() ha sido llamado')
    }
}

interface Print{
    print(): void;
}

function printClass(a: Print){
    a.print()
}

let myClassA = new ClassA()
let myClassB = new ClassB()

printClass(myClassA)
printClass(myClassB)