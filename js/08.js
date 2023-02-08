let age = parseInt(prompt("¿Cuál es su edad?"))
let money = parseFloat(prompt("¿Cuál es su saldo?"))

if(age && money){
    if(age > 18 && money > 100){
        alert("Enhorabuena, puede seguir jugando.")
    }else{
        alert("Por desgracia, no puede seguir jugando")
    }
}else{
    alert("El dato introducido no es válido")
}