const limit = parseInt(prompt("Introduzca un número:"))
let result = 1
for(let number = 1; number <= limit; number++){
    result *= number
}
alert(result)