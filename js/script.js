let peso = prompt("Ingresa tu peso (kg): ");
let altura = prompt("Ingresa tu altura (m): ");

function IMC (peso , altura){
    let resultado = peso / (altura^2);

    console.log("Tu índice de masa corporal es: " + resultado);
    document.write("Tu índice de masa corporal es: " + resultado);
    alert("Tu índice de masa corporal es: " + resultado);
}

IMC(peso , altura)



