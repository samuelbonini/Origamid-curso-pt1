import Countdown from './countdown.js';

const tempoparaonatal = new Countdown('13 Novembro 2025 8:00:30 GMT-0300');
const tempoparaanonovo = new Countdown('31 December 2025 8:00:30 GMT-0300');

console.log(tempoparaonatal.total)
setInterval (() => {
console.log(tempoparaanonovo.total)
}, 1000 )

