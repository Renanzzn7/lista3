let teclado = require('prompt-sync')();

let senha = parseInt(teclado("Digite a senha: "));

while (senha !== 2002) {
    console.log("Senha Invalida");
    senha = parseInt(teclado("Digite a senha: "));
}

console.log("Acesso Permitido");