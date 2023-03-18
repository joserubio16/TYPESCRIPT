function printGeneric<T> (value: T){
    console.log(`typeof T es: ${typeof value}`)
    console.log(`value es: ${value}`)
}

// si eswpecificamos el tipado de T el parametro espera
// el mismo tipo
//printGeneric<string>(1)
printGeneric(1)
printGeneric("test")
printGeneric(true)
printGeneric(() => {})
printGeneric({id: 1})

// podemos definir n tipados genericos, pero se recomienda
//que sea menor o iguial a la cantidad de parametros 
// que tenga la funcion
function usingTwoTypes <A, B>(first: A, second: B){

}

//al especificar el tipado, debemos señalar todos los tipos
// genericos definidos
usingTwoTypes<number, number>(1,2)
usingTwoTypes<number, string>(1,"test")
usingTwoTypes<string, boolean>("test",true)


class Concatenator <T extends  Array<string> | Array<number>>{
     concatenarArray(items:T){
        let returnString = ""
        for (let i = 0; i < items.length; i++) {
         returnString += i === 0 ? "" : ","
        returnString += items[i].toString()
            
        }
        return returnString
    }
}

let myConcatenator = new Concatenator

let concatResult = myConcatenator.concatenarArray([
    "first", "second", "third"
])

console.log(concatResult)



concatResult = myConcatenator.concatenarArray([
    1, 2, 3
])

console.log(concatResult)

//podemos reducir el tipado ya definido
//haciendo uso de la de la defición especifica
//pero solo admite el tipo de valores que indicamos en la
//clase
//let myConcatenator2 = new Concatenator<string[1, 2, 3]>()


interface IPrintId{
    id: number
    print(): void
}

interface IPrintName{
    name: string
    print(): void
}

function useT<T extends IPrintId | IPrintName>(item: T): void{
    //no lo permite porq  la pripiedad no es comun en la interface
  //  item.id
  //  item.id
}