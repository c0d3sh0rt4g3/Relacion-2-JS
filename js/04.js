let mark = prompt("¿Cual es tu nota?")

if(mark < 4){
    document.write("Insuficiente")
}else if (mark == 5){
    document.write("Suficiente")
}else if (mark == 6){
    document.write("Bien")
}else if (mark == 7 || mark == 8){
    document.write("Notable")
}else if (mark == 9 || mark == 10){
    document.write("Sobresaliente")
}else {
    document.write("Esa nota no es válida.")
}