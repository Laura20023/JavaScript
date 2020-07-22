let parada = prompt ("Hasta que numero quieres ver: ")
for (var index = 1; index <= parada; index++){
    //comprueba si es un numero par
    if (index % 2 === 0){
        console.log(index + " es par.");
    }else{
        console.log(index + " es impar.");
    }
}
console.log("/////")