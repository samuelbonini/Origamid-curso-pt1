//  const imgs = document.querySelectorAll('img');

//  imgs.forEach(function(item, index, array){
//  console.log(array)
//  });

//const titulos = document.getElementsByClassName("titulo");
//const titulosArray = Array.from(titulos);

//titulosArray.forEach(function (item, index, array) {
//console.log(item, index, array);
//});

//const imgs = document.querySelectorAll("img");

//imgs.forEach((item) => {
//console.log(item);
//});

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
paragrafos.forEach((item) => {
  console.log(item);
});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});
// Como corrigir os erros abaixo:
