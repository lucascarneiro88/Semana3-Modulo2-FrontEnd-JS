//<<<<<<<<<<<<<<<<<<<<<<<<  exemplo fazendo uso do operador condicional switch case. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let numero = 5;
let mensagem = "";

switch (numero) {
  case 1:
    mensagem = "O número é 1.";
    break;
  case 2:
    mensagem = "O número é 2.";
    break;
  case 3:
    mensagem = "O número é 3.";
    break;
  case 4:
    mensagem = "O número é 4.";
    break;
  case 5:
    mensagem = "O número é 5.";
    break;
  default:
    mensagem = "Número inválido. Digite um número de 1 a 5.";
}

console.log(mensagem);
