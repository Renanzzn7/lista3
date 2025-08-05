let teclado = require('prompt-sync')();

let x = parseInt(teclado("Digite o valor de X: "));
let y = parseInt(teclado("Digite o valor de Y: "));

while (x !== 0 && y !== 0) {
    if (x > 0 && y > 0) {
        console.log("primeiro");
    } else if (x < 0 && y > 0) {
        console.log("segundo");
    } else if (x < 0 && y < 0) {
        console.log("terceiro");
    } else if (x > 0 && y < 0) {
        console.log("quarto");
    }

    x = parseInt(teclado("Digite o valor de X: "));
    y = parseInt(teclado("Digite o valor de Y: "));
}