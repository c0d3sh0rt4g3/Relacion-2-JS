var number = parseInt(prompt("Introduzca un número"))
if(number){
    while(number <= 0){
        number = parseInt(prompt("Introduzca un número"))
    }
}else{
    alert("ERROR: EL número introducido no es válido.")
}