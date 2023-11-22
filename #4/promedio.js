/*Calcular promedio:
Crea una función que calcule el promedio de tres de números.*/
function promedio(num1,num2,num3) {
    let suma = (num1 + num2 + num3) / 3
    console.log(" El promedio de los tres numeros es " + suma );
}
let dato1 = parseInt(prompt("Ingrese primer numero"));
let dato2 = parseInt(prompt("Ingrese segundo numero"));
let dato3 = parseInt(prompt("Ingrese tercer numero"));
promedio(dato1,dato2,dato3);