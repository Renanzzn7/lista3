let teclado = require('prompt-sync')();

let alcool = 0;
let gasolina = 0;
let diesel = 0;

let codigo = parseInt(teclado("Digite o código (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim): "));

while (codigo != 4) {
    if (codigo == 1) {
        alcool++;
    } else if (codigo == 2) {
        gasolina++;
    } else if (codigo == 3) {
        diesel++;
    }

    codigo = parseInt(teclado("Digite o código (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim): "));
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);