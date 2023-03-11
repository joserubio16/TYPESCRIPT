interface Base{
    id: number
}

interface DerivedFromBase extends Base{
    name: string
}

class NumberClass implements DerivedFromBase{
    name = 'test'
    // si no declaramos todas las propiedades de las interfaces
    //marcara error
    id = 0
}

// al usar heredar una interfaz tambien podemos reducir el tipado
// reduccion de tipado
interface StrinNumberBase{
    id: string | number
}

interface DerivedFromStringNumberBase extends StrinNumberBase{
    id: string
}

interface Print{
    print: () => void
}

let myStringId: DerivedFromStringNumberBase = {id: 'hola'}

//herencia multiple

interface Multiple extends DerivedFromBase, Print{
    lastName: string;

}

let myMultiple: Multiple = {
    id: 1, 
    name: 'juan', 
    print: () => {
        console.log('hola')
    },
    lastName: 'uribe'
}

// ------------------------ Herencia en clases ----------------------

// una clase solo puede heredar una clase pero una clase
//puede heredar multiples interfaces con implements
// la diferencia de herencia de interfaces y clases, es que en las
//clases si permite heredar solo una propiedad u otra
// en las interfaces si es necesario definir las propiedades que se heredan


class BaseClass{
    id: number = 1
}

class MyClass extends BaseClass{
    name: string = ''
}

let myClass: MyClass = {
    id: 10,
    name: 'juanillo'
}

//funcion super

class BaseClassWithCtor{
    private id: number

    // las propiedades protected a diferencia de las private
    // si pueden ser accesibles por parte de la clase hija
    // y la clase padre, en cambio la propiedades protected
    // solo son accesibles en la clase padre
    protected lastname: string
    constructor(id: number){
        this.id  = id
        this.lastname = 'uribe'
    }

    print(text: string): void{
        console.log(`ClassWithCtor.print() : ${text}`)
    }
}

//Cuando se tiene una clase hija, se debe de poner siempre super
// Debido al constructor definido en la clase `padre

class DerivadaFormClassWithCtor extends BaseClassWithCtor{
    private name: string
    constructor(id: number, name: string){
        super(id)
        this.name = name
        this.lastname = 'perez'
    }
    // --------- Override ----------------
    //ejecuta el metodo de la clase hija, si la clase hija
    // no tiene metodo, toma el metodo de la clase padre
   print(text: string): void {
    console.log(`DerivadaFormClassWithCtor.print() : ${text}`)
   }
}

let myClassD: DerivadaFormClassWithCtor 
= new DerivadaFormClassWithCtor (1, 'Juan')

myClassD.print('hola')

// La implementacion de los getters y seters se hace en la clase
//donde se definio la propiedad privada




