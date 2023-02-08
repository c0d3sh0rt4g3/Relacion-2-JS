const limit = parseInt(prompt("Introduzca un número:"))
let result = 1
if(limit){
    for(let number = 1; number <= limit; number++){
        result *= number
    }
    alert(result)
}else{
    alert("El dato introducido no es un número.")
}