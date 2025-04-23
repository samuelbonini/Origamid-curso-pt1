export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / bitcoin.USD.sell).toFixed(4);
    console.log(json.USD.sell)
  }).catch(erro => {
    console.log(Error(erro));
  })

}

