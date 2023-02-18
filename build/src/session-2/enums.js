"use strict";
function checkDoorState(state) {
    console.log(`El valor del estado es ${state}`);
    switch (state) {
        case 3 /* DoorState.Open */:
            console.log('la puerta esta abierta');
            break;
        case "cerrado" /* DoorState.Closed */:
            console.log('la puerta esta cerrada');
            break;
    }
}
checkDoorState(3 /* DoorState.Open */);
checkDoorState("cerrado" /* DoorState.Closed */);
