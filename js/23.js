const number = parseInt(prompt("Introduzca un número para saber si es primo:"))
if (number){
    if(number == 1){
        alert("1 no es primo.")
    }else if(number === 2){
        alert("2 es primo")
    }else{
        for(let i = 2; i < number; i++){
            if(number % i != 0){
                alert(number + " es primo.")
                break
            }else{
                alert(number + " no es primo")
                break
            }
        }
    }
}else{
    alert("ERROR: El dato introducido no es un número.")
}