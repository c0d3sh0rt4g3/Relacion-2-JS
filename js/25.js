let notasCadena = ["Cero","Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"]
let nota = parseInt(prompt("Introduce tu nota de 1 a 10"))
}while(nota<0 || nota>10)

document.write("La nota es: "+notasCadena[nota])