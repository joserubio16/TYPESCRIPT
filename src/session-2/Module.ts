export class Module1 {
    print(){
        localPrint('Module1.print() holaa')
    }

}

function localPrint(text: string){
    console.log(`localPrint : ${text}`)
}