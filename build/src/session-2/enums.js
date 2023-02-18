"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log(`El valor del estado es ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log('la puerta esta abierta');
            break;
        case DoorState.Closed:
            console.log('la puerta esta cerrada');
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
