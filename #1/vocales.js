function vocales(cadena) {

let a = cadena.includes("a");
if (a) {
    console.log("El texto ingresado tiene la vocal (a)");
}
let e = cadena.includes("e");
if (e) {
    console.log("El texto ingresado tiene la vocal (e)");
}
let i = cadena.includes("i");
if (i) {
    console.log("El texto ingresado tiene la vocal (i)");
}
let o = cadena.includes("o");
if (o) {
    console.log("El texto ingresado tiene la vocal (o)");
}
let u = cadena.includes("u");
if (u) {
    console.log("El texto ingresado tiene la vocal (u)");
}
}
    
let cadenatexto = prompt(" Ingrese el texto que desea saber si lleva vocal");
vocales(cadenatexto); 

