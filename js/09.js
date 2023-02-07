const DNI = prompt("Por favor introduzca su DNI.")
const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
const DNIRegex = /^\d{8}[A-Za-z]$/
/*Esta expresión regular usa \d para indicar que puede haber cualquier número del 0 al 9, 
luego especifico el número de digitos que tiene que contener y por último indico que debe acabar en una letra de la A a la Z.*/

let DNINoLetter = parseInt(DNI.substring(0, 8))
let DNILetter = DNI.substring(8).toUpperCase()

if(DNI.match(DNIRegex)){
    const DNIdivision = DNINoLetter % 23
    const DNIletterCalc = letters.at(DNIdivision)
    if(DNIletterCalc == DNILetter){
        alert("Su DNI " + DNINoLetter + DNILetter + " es correcto.")
    }else{
        alert("ERROR: La letra introducida de DNI no coincide con la letra que debería tener.")
    }
}else{
    alert("ERROR: Ese número de DNI no es válido.")
}
