const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));
 


const itens = document.querySelectorAll('li');
for (const item of itens) {
  item.classList.add('ativo');
}