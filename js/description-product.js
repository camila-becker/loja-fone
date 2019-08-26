/*
  1 - Ter a janela (browser) na mão;
  2 - Ter o Html na mão;
  3 - Pegar o coração;
  4 - Pegar o clique no coração;
  5 - No momento que o usuário clicar, nós queremos mostrar um texto AE;
*/

const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
console.log($heart);
console.log($stars);

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("-active");
}
