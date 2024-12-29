// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array ) => {
//   array[index] = 'teste'
//   console.log(item, index, array);
// })

// console.log(carros);
  
const carros = ['ford', 'fiat', 'honda'];

const novaArray = carros.map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
  return;
})

console.log(novaArray);