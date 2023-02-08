const promptNum = parseInt(prompt("Introduzca un número:"))
if(promptNum){
    for(number = 1; number <= 10; number++){
        document.write(promptNum + " x " + number + "= " + promptNum * number + "<br>")
    }
}else{
    alert("ERROR: El dato introducido no es un número.")
}