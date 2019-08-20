/*
  1 - Ter a janela (browser) na mão;
  2 - Ter o Html na mão;
  3 - Pegar o coração;
  4 - Pegar o clique no coração;
  5 - No momento que o usuário clicar, nós queremos mostrar um texto AE;
*/

const $heart = window.document.querySelector(".-heart");

console.log($heart);

function handleClick() {
  $heart.classList.toggle("-active");
}

$heart.addEventListener("click", handleClick);
