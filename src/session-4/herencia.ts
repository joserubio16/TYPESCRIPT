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