function año(numro) {
    año =  (numro% 4 === 0 && numro % 100 !== 0) || (numro % 400 === 0);
    console.log(" el año es bisiesto");
    return
}
let años = parseInt(prompt(" Ingrese el año deseado "))
año(años)
