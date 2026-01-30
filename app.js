let numeroSecreto = gerarNumeroAleatorio();

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = 'Escolha um número entre 1 e 10';
}

exibirTextoNaTela('h1', 'Hora do Desafio!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}

//4. Crie uma função que exiba um alerta
// com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function amoJs() {
  alert('Eu amo JavaScript!');
}

function prompt() {}

//6. Ao clicar no botão soma, peça 2 números
// inteiros e exiba o resultado da soma em um alerta.
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}