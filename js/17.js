const oddOreven = prompt("¿Quiere ver los números pares o los impares?(Par/Impar)").toLowerCase()
if (oddOreven == "par"){
    for(let number = 1; number <= 100; number++){
        if(number % 2 == 0){
            document.write(number + "<br>")
        }
    }
}else if (oddOreven == "impar"){
    for(let number = 1; number <= 100; number++){
        if(number % 2 != 0){
            document.write(number + "<br>")
        }
    }
}else{
    alert("El dato introducido no es válido.")
}