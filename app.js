function verificarChute() {
  console.log('O botão foi clicado!');
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = 'Escolha um número entre 1 e 10';
}

exibirTextoNaTela('h1', 'Hora do Desafio!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


//Exercícios adicionais
function amoJs() {
  alert('Eu amo JavaScript!');
}

function prompt() {}