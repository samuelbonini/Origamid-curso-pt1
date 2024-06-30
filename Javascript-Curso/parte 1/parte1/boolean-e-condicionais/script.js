// var possuiGraduacao = false;
// var possuiDoutorado = true;

// if(possuiGraduacao) {
//   console.log('É Verdadeiro');
// } else if(possuiDoutorado) {
//   console.log('Possui Doutorado');
// } else {
//   console.log('Não possui nada');
// }


// var x = 10;
// console.log(x !== 11);

// var corFavorita = 'Azul';

// switch (corFavorita) {
//   case 'Rosa':
//     console.log('Seja Inter');
//     break;
//     case 'Amarelo':
//       console.log('Olhe para o inter');
//         break;
//         default:
//       console.log('Feche os olhos');
// }

// Verifique se a sua idade é maior do que a de algum parente

var samuel = 21;
var adriana = 21;

if (samuel > adriana) {
  console.log('Samuel é mais velho')
} else if (samuel === adriana) {
console.log('é igual')
}
else {
  console.log('Adriana é mais nova')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 2207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');

} else {
  console.log('China tem mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}