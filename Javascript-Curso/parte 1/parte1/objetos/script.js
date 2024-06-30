var status = {
  nome: 'samuel',
  idade: 23,
  profissão: 'impressor',
  faculdade: true,
}
console.log(status);

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    console.log(this);
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
  altura: 1.55
}

var bg = menu.altura;

