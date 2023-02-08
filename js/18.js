const limit = parseInt(prompt("Introduzca un número:"))
let result = 0
if(limit){
    for(let number = 0; number <= limit; number++){
        result += number
    }
    alert(result)
}else{
    alert("ERROR: El dato introducido no es un número.")
}