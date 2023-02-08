let marksList = ["Cero","Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"]
let mark
do{
    mark = parseInt(prompt("Introduce tu nota de 1 a 10"))
}while(mark<0 || mark>10)

document.write("La nota es: "+marksList[mark])