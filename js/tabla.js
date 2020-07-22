var number = 0;
while (number < 2 || number >10){
    number = Number(prompt("Elige una tabla de multiplicar entre 2 y 10"));
}

var index = 1;
while (index <=10){
    console.log(number + " * " + index + " = " + number * index);
    index++
}