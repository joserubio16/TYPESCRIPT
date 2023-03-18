//operador keyof

interface IPerson{
    id: number
    name: string
}

type PersonePropertyName = keyof IPerson

let myPersonPropertyName: PersonePropertyName = "id"

//restricciones genericas

function printProperty<T, K extends keyof T>
(object: T, key: K){
    let propertyValue = object[key]
    console.log(`object[${String(key)}] = ${propertyValue}`)
}



const object1 = {
    id: 1,
    name: "my name test",
    print() {console.log("HOLA")} 
}


printProperty(object1, "id")
printProperty(object1, "name")