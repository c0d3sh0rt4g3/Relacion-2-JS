let firstEvMark = parseInt(prompt("Nota de la primera evaluación:"))
if (firstEvMark && firstEvMark >= 0 && firstEvMark <= 10 || firstEvMark == 0){
    let secondEvMark = parseInt(prompt("Nota de la segunda evaluación:"))
    if(secondEvMark && secondEvMark >= 0 && secondEvMark <= 10 || secondEvMark == 0){
        let thirdEvMark = parseInt(prompt("Nota de la tercera evaluación:"))
        if (thirdEvMark && thirdEvMark >= 0 && thirdEvMark <= 10){
            if(firstEvMark >= 5 && secondEvMark >= 5 && thirdEvMark >= 5 || thirdEvMark == 0){
                let markAverage = (firstEvMark + secondEvMark + thirdEvMark)/3
                document.write("Tu media es de ", markAverage)
            }else {
                let Marks = [firstEvMark, secondEvMark, thirdEvMark]
                var trimestre = 1
                for (const mark in Marks){
                    if (mark < 5){
                        document.write("Tienes que recuperar el " + trimestre + " trimestre ya que tienes un " + Marks[mark] + "<br>")
                    }
                    trimestre += 1
                }
            }
        }else{
            document.write("La nota introducida no es válida")
        }
    }else{
        document.write("La nota introducida no es válida")
    }
}else{
    document.write("La nota introducida no es válida")
}
