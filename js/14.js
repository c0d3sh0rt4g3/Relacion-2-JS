let times = parseInt(prompt("Introduzca un número:", 1))

if (times){
    if(times <= 0){
        alert("ERROR: El número introducido no es válido.")
    }else{
        while (times > 0){
            document.write("*")
            times -= 1
        }
    }
}else if(times == 0){
    alert("Has introducido 0 por tanto no se escribirá el * ninguna vez.")
}else{
    alert("ERROR: No has introducido un número.")
}