import { Module1 } from "./src/modules/Module1";
// RENOMBRAR modulos, nos sirve para cuando se repiten los nombres
//de los modulos
import { Module1 as MyMod1 } from "./src/session-2/Module";

let myModule1 = new Module1()
myModule1.print()

let myMod1 = new MyMod1()
myMod1.print()