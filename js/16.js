const limit = parseInt(prompt("Introduzca un número:"))
if (limit){
    for(let number = 1; number <= limit; number++){
        document.write(number + "<br>")
    }
}else{
    alert("ERROR: El dato introducido no es un número.")
}