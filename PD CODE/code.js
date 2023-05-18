function factorialN(){
    var N = prompt("Ingrese N",3)
    var i = 1
    var resp = 1
    if(N >= 0){
      if(N==0){
        alert("el factorial de N es "+resp)
      }else{
        while(N >=i){
            resp = resp *i
            i = i + 1
        }
        alert("factorial N es: " + resp)
      }
    }else{
        alert("No factorial de un negativo")
    }
}
function mayorAyB() {
    var A = parseInt(prompt("ingrese A",10))
    var B = parseInt(prompt("ingrese B",7))
    if(A ==B){
        alert("son iguales")
    }else{
        if(A > B){
            alert("el mayor es A:" + A)
        }else{
            alert("el mayor es B:" + B)
        }
    }
}
function mayorAyB() {
    var A = parseInt(prompt("ingrese A",10))
    var B = parseInt(prompt("ingrese B",7))
    if(A ==B){
        alert("son iguales")
    }else{
        if(A > B){
            alert("el menor es B:" + B)
        }else{
            alert("el menor es A:" + A)
        }
    }
}
function obtenerDiv() {
    var A = parseInt(prompt("ingrese A",10))
    var B = parseInt(prompt("ingrese B",7))
    var resultado
    resultado = A / B
    alert(parseInt(resultado))
   

}
function obtenerMod() {
    var A = parseInt(prompt("ingrese A",10))
    var B = parseInt(prompt("ingrese B",7))
    var resultado
    resultado = A % B
    alert(parseInt(resultado))
   

}
function digitosN() {
    var N = parseInt(prompt("ingrese N",10))
    var resp = 0
    var cantidad = 1
    while(N != 0){
        N = parseInt (N / 10)
        cantidad = cantidad + 1  
    }
    alert("digitos:" + cantidad)

}
function  retornardigitosN() {
    var N = parseInt(prompt("ingrese N",9478324))
    var dig = 0
    while(N != 0){
        dig = parseInt(N % 10)
        alert(dig)
        N = parseInt (N / 10)
    }

}function  existeDig3enN() {
    var N = parseInt(prompt("ingrese N",9478324))
    var dig = 0
    while(N != 0){
        dig = parseInt(N % 10)
        if(dig == 3){
            alert("existe el dig 3")
        }
        N = parseInt (N / 10)
    }

}

