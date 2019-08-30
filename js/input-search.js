//Busca o componente
const $inputSearch = document.querySelector(".input-search");
//Busca o filho do componente
const $open = $inputSearch.querySelector(".-open");
const $close = $inputSearch.querySelector(".-close");

$open.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  $open.classList.remove("-active");
  $close.classList.add("-active");
});

$close.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  $close.classList.remove("-active");
  $open.classList.add("-active");
});
