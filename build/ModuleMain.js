"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module1_1 = require("./src/modules/Module1");
// RENOMBRAR modulos, nos sirve para cuando se repiten los nombres
//de los modulos
const Module_1 = require("./src/session-2/Module");
//exportar multiplaces clases
const MultipleExports_1 = require("./src/modules/MultipleExports");
let myModule1 = new Module1_1.Module1();
myModule1.print();
let myMod1 = new Module_1.Module1();
myMod1.print();
let myMC1 = new MultipleExports_1.MultipleClass1;
let myMC2 = new MultipleExports_1.MultipleClass2;
