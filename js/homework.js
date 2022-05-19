//weather TAREA

let weather =
    prompt("¿Cómo está el clima en tu ciudad? a.Soleado b.Lluvioso c.Nevado d.Nublado", "a")
let celsius = parseInt(prompt("¿A cuantos grados está tu ciudad?", 20))
let fahrenheit = (celsius * 9 / 5 + 32)

switch (weather) {
    case "a":
        window.alert(`En tu ciudad, el día está soleado con una temperatura de ${fahrenheit}F°`)
        break
    case "b":
        window.alert(`En tu ciudad, el día está lluvioso con una temperatura de ${fahrenheit}F°`)
        break
    case "c":
        window.alert(`En tu ciudad, el día está nevado con una temperatura de ${fahrenheit}F°`)
        break
    case "d":
        window.alert(`En tu ciudad, el día está nublado con una temperatura de ${fahrenheit}F°`)
        break
    default:
        window.alert(`En tu ciudad, están a ${fahrenheit}F° con un clima no especificado`)
        break


}



