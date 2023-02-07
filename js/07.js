let userName = prompt("Dime tu nombre:", "Desconocido")

if(userName == ""){
    alert("La cadena introducida está vacía")
}else if(userName == "Desconocido"){
    alert("Su nombre por defecto es " + userName)
}else if(userName == null){
    alert("No ha introducido nada")
}else{
    alert("Su nombre introducido es: " + userName)
}