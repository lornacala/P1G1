
function verPersona(){
    var persona1 = new Persona()
    persona1.SetNombre("yuliza")
    persona1.SetEdad(15)
    persona1.SetCarnet(1000)
   
    var materia1 = new Materia()
    materia1.SetCapacidad(21)
    materia1.SetAula("B206")
    materia1.SetNombre("programacion 2")
    
    var asistencia1 = new  Asistencia()
    asistencia1.SetEstudiante(persona1)
    asistencia1.SetMateria(materia1)
    
alert(asistencia1.toString())
    //alert(persona1.toString())
    //alert(materia1.toString())
   

}




/* 
realizar la creacion de la clase "estudiante" con las 
siguientes propiedades :
 - carnet
 - nombre
 - apellido


*/
