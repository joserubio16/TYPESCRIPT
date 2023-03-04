
//operador in
interface IdName {
    id: number;
    name: string;
}

interface DescrValue {
    descr: string;
    value: number;
}

function printDtring(obj: IdName | DescrValue){
    if('id' in obj){
        console.log(`obj.name : ${obj.name}`)
    }
    if('descr' in obj){
        console.log(`obj.descr : ${obj.descr}`)
    }
}

printDtring({id: 1, name: 'juan'})
printDtring({descr: 'test', value: 2})

//operador keyof

type IdNameProperty = keyof IdName

function getProperty(key: IdNameProperty, value: IdName
    ){
        console.log(`${key} = ${value[key]}`)
}

getProperty('name', {id: 1, name: 'juan'})
//getProperty('telephone', {id: 1, name: 'juan'})