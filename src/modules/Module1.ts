export class Module1 {
    print(){
        localPrint('Module1.print() called')
    }

}

function localPrint(text: string){
    console.log(`localPrint : ${text}`)
}

//esta funcion solo existe en el ambito de este archivo y no se puede usar fuera de 
//este archivo