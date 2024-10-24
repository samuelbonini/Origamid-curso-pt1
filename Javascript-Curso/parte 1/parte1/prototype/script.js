const Carro = {
  marca: 'ford',
  preco: 3000,
  andar() {
    return true
  }
}

function pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

const samuel = new pessoa ('Samuel', 'Muca', 23);


