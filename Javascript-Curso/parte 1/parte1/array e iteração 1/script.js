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


const frutas = ['banana', 'pera', 'uva'];

const temUva = frutas.some((item) => {
  console.log(item);
  return item === 'uva';
})

console.log(temUva);