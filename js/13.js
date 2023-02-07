let times = parseInt(prompt("¿Cuantas veces se debe imprimir?", 15))

if (times){
    if(times <= 0){
        alert("ERROR: El número introducido no es válido.")
    }else{
        while (times > 0){
            document.write("Tabularé bien mis programas" + "<br>")
            times -= 1
        }
    }
}else if(times == 0){
    alert("Has introducido 0 por tanto no se escribirá la frase ninguna vez.")
}else{
    alert("ERROR: No has introducido un número.")
}