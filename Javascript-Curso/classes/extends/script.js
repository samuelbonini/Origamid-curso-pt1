class veiculo {
   constructor (rodas) {
      this.rodas = rodas;
   }
   acelerar() {
      console.log('acelerou');
   }
}

class Moto extends veiculo {
   empinar() {
      console.log('moto empinou com ' + this.rodas + ' rodas ');
   }
}

const honda = new Moto(2);
const civic = new veiculo(4);
