console.log("Hola Mundo".silver)

function HolaMundo(Libro){
    console.log("Informacion del:")
}

class libro{
    Libro
    Escritor
    Editorial
    Tomo
    
    constructor(nombre1, nombre2, tomo, editorial){
        this.Libro = nombre1
        this.Escritor = nombre2
        this.Tomo = tomo
        this.Editorial = editorial
    }
}

const objLibro = {
    nombre1: "El señor de los anillos",
    nombre2: "JRR Tolkien",
    tomo: "El viaje de ida",
    editorial: "George Allen & Unwin",
}

const Libro = new libro("El señor de los anillos", "JRR Tolkien", "El viaje de ida", "George Allen & Unwin")

HolaMundo(objLibro)
console.log(Libro)