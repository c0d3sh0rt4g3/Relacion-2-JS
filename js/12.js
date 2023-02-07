let num = prompt("Introduzca un número para calcular su factorial:")
if(num > 0 || num < 0){
    for (var i = num - 1; i >= 1; i--) {
        num *= i
    }
    document.write("El factorial será " + num)
}else if(num == 0){
    document.write("El factorial será 0")
}else{
    alert("El dato introducido no es válido.")
}