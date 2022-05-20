
//metodos de string
//funciones
// str.nombreMetodo(p1,p2,pN) (p = parametro)
//promt(message, default)
//.toUpperCase()
//.toLowerCase()
//.substring(searchElement, fromIndex)
//.slice(start, end)


/*
"hola koders"
cuantas vocales existen
"Hola koders"
cuantos caracteres son
"Hola koders"
cortar el string en 2 strings
*/

let sentence = "Hola koders"

let vow = sentence.match(/[aeiou]/g).length
console.log(vow)


let len = sentence.length
console.log (len)


let cut = sentence.split(" ")
console.log(cut)

/**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/

console.log(sentence.replace(/[aeiou]/gi, "*"))


