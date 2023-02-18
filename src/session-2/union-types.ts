function printObject(obj: number | string){
    console.log(obj)
}

printObject(1)
printObject('hola')

function  addWithUnion (arg1: string | 
    number, arg2: string | number){

        if (typeof arg1 === 'string'){
            //arg 1 
    
        console.log(`arg1 es un string`)
        return arg1 + arg2
        }
    }

    console.log(addWithUnion('hola', 'mundo'))


    //tipos personalizados
    type StringOrNumber = string | number;

    function addWithTypeAlias(
        arg1: StringOrNumber,
        arg2: StringOrNumber
    ){
        return arg1.toString() + arg2.toString()
    }