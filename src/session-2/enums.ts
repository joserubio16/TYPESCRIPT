enum DoorState{
    Open,
    Closed
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

