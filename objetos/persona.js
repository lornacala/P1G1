//1.- NOMBRE DE LA CLASE
class Persona{
    //2.- PROPÌEDADES 
    carnet = 0
    nombre = ""
    edad = 0

    //3.- CONSTRUCTOR, ASIGNAR VALOR POR DEFECTO 
    constructor(){
        this.carnet = 1234567;
        this.nombre = "MyNombre"
        this.edad = 100
    }
    //4.- SETTERS AND GETTTERS - DAR Y OBTENER UN VALOR 
    GetCarnet(){
        return this.carnet
    }
    GetNombre(){
        return this.nombre
    }
    GetEdad(){
        return this.edad
    }
    SetCarnet(valor){
        this.carnet = valor
    }
    SetNombre(valor){
        this.nombre = valor
    }
    SetEdad(valor){
        this.edad = valor
    }
    //5.- LOS METOS DE LA CLASE

    toString(){
        return "persona: " + this.GetCarnet()
        +" "
        + this.GetNombre()
        +" "
        + this.GetEdad()
    }


    contarvocales(){
        var cadena = this.GetNombre()
        var longitudCad = cadena.length
        var i = 0
        var contar = 0
        while (longitudCad > i){
            var caracter = cadena[i]
            i++
            if (caracter == 'a' || caracter == 'e' ||caracter == 'i'
            || caracter == 'o'||caracter == 'u'){
                contar = contar + 1
            }  
            //alert(caracter)

        }
        //alert("la frecuencia de a'e'i' es:" + contar)
        return contar
    }
    

}