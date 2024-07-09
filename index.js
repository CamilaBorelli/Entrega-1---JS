class Persona {
    constructor(edad, aportes, nombre) {
        this.edad = edad;
        this.aportes = aportes;
        this.nombre = nombre;
    }

    ValidarJubilacion() {
        if (this.edad < 65, this.aportes < 30) {
            return false
        }
        return true;
    }

    ValidarEdad() {
        if (this.edad < 65) {
            return false
        } else {
            return true
        }
    }

}

const personas = [];

const maximo = prompt("Ingrese cantidad máxima de personas:   ");
do {
    let nombre = prompt("Ingrese su Nombre:");
    let edad = parseFloat(prompt("Ingrese su edad"));
    let aportes = parseFloat(prompt("Ingrese sus años de aporte"));

    personas.push(new Persona(edad, aportes, nombre))

} while (personas.length < maximo);

let ingresarNombre = prompt("Busqueda por nombre:   ");

let personaEncontrada = personas.find(persona => persona.nombre == ingresarNombre);


if (personaEncontrada.ValidarEdad() == false) {
    alert("Aun no podés jubilarte")
} else {
    if (personaEncontrada.ValidarJubilacion() == true) {
        alert("Ya podés jubilarte")
    } else {
        alert("Aun no podés jubilarte")
    }
}




