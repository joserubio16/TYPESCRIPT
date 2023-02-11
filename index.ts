let text: string = 'hola'
text = 'hola2'
console.log(text)

function suma(num1: number, num2: number): number{
    return num1 + num2
}

console.log(suma(1,3))

let a:string=''

let booleanos: boolean = false
let arreglos: string[] = ['hola', a, text]
let objetos: object = {id: 1, nombre: 'Pedro'}

// null no es lo mismo que void
let nulos: null = null
function imprimirEnConsola (mensaje: string): void{
    console.log(mensaje)
}