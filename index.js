class Estudiante {
    #nombre;
    constructor(nombre) {
        this.#nombre = nombre;
    }

    asignaturas = ['HTML', 'CSS', 'JavaScript'];

    obtenDatos() {
        return {
            nombre: this.#nombre,
            asignaturas: this.asignaturas
        }
    }
}

let persona1 = new Estudiante('Andrea');

console.log(persona1.obtenDatos())