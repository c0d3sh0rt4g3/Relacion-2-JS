const limit = parseInt(prompt("Introduzca un número:"))
let result = 0
for(let number = 0; number <= limit; number++){
    result += number
}
alert(result)