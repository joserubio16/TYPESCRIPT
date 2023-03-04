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