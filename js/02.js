let number = parseInt(prompt("Give me a number: "))
if (number){
    if(number % 2 == 0){
        document.write(number, " is even.")
    } else if(number % 2 != 0){
        document.write(number, " is odd.")
    }
}else{
    document.write("The data introduced is not a number.")
}