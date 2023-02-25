interface IdName {
    id: number;
    name: string;
}

let idName: IdName = {
    id: 1,
    name: 'pepe'
}

interface weakType {
    id?: number;
    name?: string;
}

// da error por que no poodemos asignar propiedades
//que no existen en la interfase
//*let test: IdName = {
 //   lastName = 'Uribe'
//}