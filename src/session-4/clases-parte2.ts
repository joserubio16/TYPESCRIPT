class ClassWithConstructor {
    id: number;
    constructor(_id: number) {
        this.id = _id
    }
}

let classWC = new ClassWithConstructor(10)

console.log(`classwc = ${JSON.stringify(classWC)}`)

//clases
//clase publica
class ClassWithPublicProperty{
   public id: number | undefined
}

let myClassWithPublicP = new ClassWithPublicProperty();
myClassWithPublicP.id = 10


//clase privada

class ClaseConPropiedadPrivada {
    private id: number | undefined
    constructor(id: number) {
        this.id = id
    }
    print(){
        console.log(this.id)
    }
}

let miClasePrivada = new ClaseConPropiedadPrivada(11);
// nno se puede acceder a una propiuedad privada fuera de la clase, pero si uilizar metodos
// publicos para acceder a ellos
//miClasePrivada.id = 10
miClasePrivada.print() 


class ClassMods {
    constructor(public id: number, private name: string) {
    }
}

let myClassMods = new ClassMods(2, 'juan')
console.log(`myClassMods.id = ${myClassMods.id}`)

//da error ya que name es privado
//console.log(`myClassMods.id = ${myClassMods.name}`)

//readonly
class ClassWhitReadOnly {
   readonly name: string;
    constructor(name: string) {
        this.name = name
        }
}

let myClassReadonly = new ClassWhitReadOnly('juanb')

//no se puede modificar ni por dentro ni por fuera, solo leer 
//myClassReadonly.name= 'ivan'

console.log(myClassReadonly.name)


//getters Setters

class ClassWithAccesors{
    private _id: number = 10

     get id() : number {
        return this._id
    }

    set id(value :  number) {
        this._id = value;
    }
}

let myClassWithAccesors = new ClassWithAccesors()

console.log(myClassWithAccesors.id)
myClassWithAccesors.id = 100
console.log(myClassWithAccesors.id)