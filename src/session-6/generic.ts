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
