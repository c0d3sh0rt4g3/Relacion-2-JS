let age = parseInt(prompt("¿Cuál es su edad?"))
let money = parseInt(prompt("¿Cuál es su saldo?"))

if(age > 18 && money > 100){
    alert("Enhorabuena, puede seguir jugando.")
}else{
    alert("Por desgracia, no puede seguir jugando")
}