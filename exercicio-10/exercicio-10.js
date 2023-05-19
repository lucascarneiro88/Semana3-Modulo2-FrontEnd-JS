// Exemplo de manipulação de evento de clique do DOM em JavaScript

// Obtém uma referência ao elemento do botão pelo seu ID
const button = document.getElementById("button");

// Função de callback para o evento de clique
function handleClick() {
  alert("O botão foi clicado!");
}

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener("click", handleClick);
