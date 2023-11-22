/*Verificación de par:
Desarrolla una función que determine si un número dado es par o imparfut*/

function paroimpar(numero) {
    if ( numero %2 === 0) {
        console.log("El numero ingresado es par  ");
    }
    else{
        console.log(" El numero ingresado es impar");
    }
}
let dato = prompt("Ingrese el numero que desea saber si es par o impar ")
paroimpar(dato)
