//ciclos

//for

//while(){}

/*do{

}while()
*/
for (let i =1; i<=10; i++) {
    console.log(`'5 x ${i} = ${5*i}' `)
}

/*let str = "Hola Koders"

let fin = str.length -1

for (let i =0; i<= fin; i++) {
    console.log(str[i])
}
*/
//"Hola Koder"
//imprimir en consola cada una de las vocales
//ciclos y condicionales

let str = "Hola Koders"

let fin = str.length -1

for (let i =0; i< fin; i++) {
    let caracter = str[i]
    if (
        caracter !== "a" &&
        caracter !== "e" &&
        caracter !== "i" &&
        caracter !== "o" &&
        caracter !== "u" &&
        caracter !== " "
    ) {
        console.log(caracter)
    }
}

//imprimir en consola cada una de las consonantes