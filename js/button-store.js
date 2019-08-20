const $button = window.document.querySelector(".-second");
console.log($button);

const $cart = window.document.querySelector(".-last");
console.log($cart);

function clickButton() {
  console.log("Clicou no botão adiciona no carrinho");
  $cart.innerHTML = "Fui clicado!";
}

$button.addEventListener("click", clickButton);
