//pedir al usuario que ingrese 3 numeros
// imprimir en consola el mayor


let num1 = parseInt(prompt("introduce valor 1"))
let num2 = parseInt(prompt("introduce valor 2"))
let num3 = parseInt(prompt("introduce valor 3"))

if (num1 > num2 && num1 > num3) {
    console.log(`el numero mayor es ${num1}`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`el numero mayor es ${num2}`)
} else if (num3 > num1 && num3 > num2) {
    console.log(`el numero mayor es ${num3}`)
} else {
    console.log ("hay igualdad")
}


