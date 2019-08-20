const $button = window.document.querySelector(".-second");
console.log($button);

function clickButton() {
  console.log("Clicou no botão adiciona no carrinho");
}

$button.addEventListener("click", clickButton);
