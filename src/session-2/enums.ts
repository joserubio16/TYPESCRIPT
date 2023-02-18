// Siempre utilizar con constante, lista de opciones
const enum DoorState{
    Open = 3,
    Closed = 'cerrado'
}

//se pueden generar los qu nqueramos variables
const enum window{
    Open = 3,
    Closed = 'cerrado'
}


function checkDoorState(state: DoorState){
    console.log(`El valor del estado es ${state}`)
    switch (state){
        case DoorState.Open:
            console.log('la puerta esta abierta')
            break
        case DoorState.Closed:
            console.log('la puerta esta cerrada')
            break
    }

}

checkDoorState(DoorState.Open)
checkDoorState(DoorState.Closed)

