class Asistencia{
    fecha ="30/05/2023"
    asistencia = ""
    estudiante = new Persona()
    materia = new Materia()

    constructor(){
        this.fecha = "30/05/2023"
        this.asistencia = "si"
        this.estudiante.SetNombre("yuliza")
        this.materia.SetNombre("A103")

    }
    GetFecha(){return this.fecha}
    GetAsistencia(){return this.asistencia}
    GetEstudiante(){return this.estudiante.toString()}
    GetMateria(){return this.materia.toString()}
    
    SetFecha(valor){ this.fecha = valor}
    SetAsistencia(valor){ this.asistencia = valor}
    SetEstudiante(valor){ this.estudiante = valor}
    SetMateria(valor){ this.materia = valor}

    toString(){
        return this.GetFecha()
        +" "
        + this.GetAsistencia()
        +" "
        + this.GetEstudiante().toString()
        +" "
        + this.GetMateria().toString()
    }
}
