class Materia{
    nombre = ""
    aula = ""
    capacidad = 0

    constructor(){
        this.nombre = "Ingrese el nombre de la materia"
        this.aula = "Ingrese el nombre de aula"
        this.capacidad = 1
    }
    GetNombre(){return this.nombre}
    GetAula(){ return this.aula}
    GetCapacidad(){ return this.capacidad}

    SetNombre(valor){ this.nombre = valor}
    SetAula(valor){  this.aula = valor}
    SetCapacidad(valor){ this.capacidad = valor}

    toString(){
        return "Materia " + this.GetNombre()
        + " "
        + this.GetAula()
        + " "
        + this.GetCapacidad()
    }
}