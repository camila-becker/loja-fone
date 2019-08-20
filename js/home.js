const $second = window.document.querySelector(".-second");
console.log($second);

const $cart = window.document.querySelector(".-last");
console.log($cart);

function handleClick() {
  console.log("Clicou no botão adiciona no carrinho");
  $cart.innerHTML = "Fui clicado!";
}

$second.addEventListener("click", handleClick);
