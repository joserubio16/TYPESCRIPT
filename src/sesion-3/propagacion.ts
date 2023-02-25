let firstObj: object = {id: 1, name: 'firstObj'}
let secondObj: object = { ...firstObj}

console.log('secondObjt: ' + JSON.stringify(secondObj))

let nameObj: object = {name: 'nameOnj'}
let idObj: object = {id: 2}

let obj3: object = {...nameObj, ...idObj}

console.log(obj3)

//propagacion de arreglos 

let firstArry: number[] = [1,2,3]
let secondArry: number[] = [3,4,5]
let thirdArry = [...firstArry, ...secondArry]

console.log('thirdArry = ' + thirdArry)