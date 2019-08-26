/*
  1 - Ter a janela (browser) na mão;
  2 - Ter o Html na mão;
  3 - Pegar o coração;
  4 - Pegar o clique no coração;
  5 - No momento que o usuário clicar, nós queremos mostrar um texto AE;
*/

const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;
console.log($heart);
console.log($stars);

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }
  if (key == positionLast) {
    $star.addEventListener("click", lastStar);
  }
  if (key > 0 && key < positionLast) {
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
});

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function middleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}

function handleClick() {
  this.classList.toggle("-active");
}
