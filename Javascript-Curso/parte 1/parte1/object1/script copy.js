const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro = {
  rodas: 4,
  porta: true,
};

Object.assign(moto, funcaoAutomovel, carro);

console.log(moto);
