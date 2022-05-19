// operador ternario
// espresion ? true : false
 
//if  else
let numero = 3
if(numero % 2 === 0){
    console.log (' es par')
} else {
    console.log ('es impar')
}

//operador ternario
numero % 2 === 0 
    ? 
    console.log(' es par') 
    : 
    console.log('es impar')

let esPar = numero % 2 === 0 ? true : false
console.log(`el numero ${numero} es ${esPar=== true ? 'par' : 'impar'}`)


//switch case con operador ternario
let age = parseInt(prompt('cual es tu edad', 17))
let isAge = age <= 18 ? true : false
switch (isAge) {
    case true:
        console.log('eres menor de edad')
        break;
    case false:
        console.log('eres mayor de edad')
        break;
    default:
        console.log('no es una edad valida')
        break;
}