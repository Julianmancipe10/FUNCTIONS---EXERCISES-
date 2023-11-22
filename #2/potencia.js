/*Calculadora de potencia:
Crea una función que tome dos números como argumentos y devuelva el resultado de elevar el primero al segundo*/
function numeros(numero1, numero2) {
    let operacion = numero1 ** numero2; 
        console.log(" El numero elevado es " + operacion  );
}
let valor1 = parseInt(prompt("ingrese primer numero "));
let valor2 = parseInt(prompt("ingrese segundo numero "));
numeros(valor1,valor2);
