import saludar,{ Saludar, PI, usuario } from "./constantes.js"
import { aritmetica as calculos} from "./aritmetica.js"

console.log("Archivos modulos js");
console.log(PI, usuario);
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));

saludar();
let saludo = new Saludar();
saludo
//Solo se puede hacer una exportación default, ya sea variable, función o clase 