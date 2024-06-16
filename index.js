
let edad = parseFloat(prompt("Ingrese su edad"));
let aportes = parseFloat(prompt("Ingrese sus años de aporte"));

let esMayorDeEdad = ValidarEdad(edad)

if (esMayorDeEdad == false) {
    alert("Aun no podés jubilarte")
}

let jubilacion = ValidarJubilacion(edad, aportes);

if (jubilacion == true) {
    alert("Ya podés jubilarte")
} else {
    alert("Aun no podés jubilarte")
}

function ValidarEdad(edad) {
    if (edad < 65) {
        return false
    } else {
        return true
    }
}

function ValidarJubilacion(edad, aportes) {
    if (edad < 65, aportes < 30) {
        return false
    }
    return true;
}

