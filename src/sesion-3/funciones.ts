const sumaNumeros = (a: number, b: number) => {
    return a + b
}

console.log(sumaNumeros(2,3))

//parametro opcional
const concatValues = (a: string, b?: string) =>{
       return console.log('a+b = ' + a + b) 

}
concatValues('primero', 'segundo')
concatValues('primero')

//parametro por defecto
const concatWithDefaultValues = (a: string, b: string = 'hola') =>{
    return console.log('a+b = ' + a + b) 

}
concatWithDefaultValues('primero', 'segundo')
concatWithDefaultValues('primero')