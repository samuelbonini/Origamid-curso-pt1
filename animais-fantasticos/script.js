const listaAnimais = document.querySelector(".animais-lista");
const height = listaAnimais.scrollHeight;
console.log(height);
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imgtop = document.querySelector("img");
const imgtopaltura = imgtop.offsetTop;
console.log(imgtopaltura);
// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
  
}
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, 'possui acce')

  } else {
    console.log(link, 'pnao possui acce')

  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu');
}