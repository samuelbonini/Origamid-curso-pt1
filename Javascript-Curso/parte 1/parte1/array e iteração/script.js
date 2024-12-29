// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array ) => {
//   array[index] = 'teste'
//   console.log(item, index, array);
// })

// console.log(carros);
  
const carros = ['ferrari', 'fusca', 'honda'];

const novaArray = carros.map((item, index, array) => {
  console.log(item, index, array);
  return item;
})

console.log(novaArray);

const numeros = [1, 4, 8, 12, 28]
const numeros2 = numeros.map(n => n * 2);

console.log(numeros2);