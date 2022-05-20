//TAREA Sesion 3

//Ejercicio 1
// investigar while, y do while
// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

let num = parseInt(prompt("introduce un valor entre 1 y 10", 1))
if (num > 10 || num < 1) {
    console.log("Solo se admiten valores entre 1 y 10") 
    window.alert("Solo se admiten valores entre 1 y 10")  
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} es ${num * i}`)
    }
}

/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

//no alcancé a hacerlo y lo salté por entender mejor el siguiente :c


/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * if (ejer4 >= 10 && ejer4 <= 100 && ejer4 % 2 == 0)
 */


let ejer4 = prompt("Introduce un valor entre 10 y 100")
if (ejer4 >= 10 && ejer4 <= 100) {
    for (let i = ejer4; i <= 100; i++) {
        let par = i
        if (
            par % 2 == 0
        ) {
            console.log(par)
        }
    }
} else {
    console.log("Solo se admiten valores entre 10 y 100")
    window.alert("Solo se admiten valores entre 10 y 100")
}