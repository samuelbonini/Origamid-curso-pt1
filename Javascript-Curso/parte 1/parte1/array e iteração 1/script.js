// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array ) => {
//   array[index] = 'teste'
//   console.log(item, index, array);
// })

// console.log(carros);

// const carros = ['ferrari', 'fusca', 'honda'];

// const novaArray = carros.map((item, index, array) => {
//   console.log(item, index, array);
//   return item;
// })

// console.log(novaArray);

// const numeros = [1, 4, 8, 12, 28]
// const numeros2 = numeros.map(n => n * 2);

// console.log(numeros2);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// EXEMPLO 1
// const numeros = [10, 25, 35, 61, 99, 2];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if(anterior > atual)
//     return anterior
//   else
//   return atual
// })

// console.log(maiorNumero);

// EXEMPLO 2, memsmo resultado

// const numeros = [10, 25, 35, 61, 99, 2];

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual)

// console.log(maiorNumero);


// const frutas = ['banana', 'pera', 'uva'];

// const temUva = frutas.some((item) => {
//   console.log(item);
//   return item === 'uva';
// })

// console.log(temUva);

// --- EXERCICIOS ----

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
titulo,
descricao,
aulas,
horas,
  }
})
console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
