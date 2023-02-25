
var myCallback = (text) => {
    console.log('myCallback is called with: ' + text)
}

function withCallbackArg(message, callbackfn){
console.log('withCallback called, message ' + message)
callbackfn(message + 'from withCallback')

}

//console.log(myCallback('initial text'))
//no da error
console.log(withCallbackArg('initial text', myCallback))
//da error poor que espera q sea una funcion
console.log(withCallbackArg('initial text', 'myCallback'))