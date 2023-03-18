import { Module1 } from "./src/modules/Module1";
// RENOMBRAR modulos, nos sirve para cuando se repiten los nombres
//de los modulos
import { Module1 as MyMod1 } from "./src/session-2/Module";

//exportar multiplaces clases
import { MultipleClass1, MultipleClass2 } from "./src/modules/MultipleExports";

//mod default
import DefaultAdd from "./src/modules/DefaultExport";

let myModule1 = new Module1()
myModule1.print()

let myMod1 = new MyMod1()
myMod1.print()

let myMC1 = new MultipleClass1
let myMC2 = new MultipleClass2

let modDefault = DefaultAdd(1, 2) 
console.log(modDefault)