
function verPersona(){
    var persona = new Persona()//creando mi clase
    persona.SetNombre("yuliza")
    persona.SetCarnet(15)
    var name = persona.GetNombre()

alert(name)

    if(persona.GetEdad() > 18){
    alert("Mayor de edad")
    }else{
    alert("vuelva pronto")
    }

}