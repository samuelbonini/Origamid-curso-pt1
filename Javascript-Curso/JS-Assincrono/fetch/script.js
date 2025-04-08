const doc = fetch('./style.css');

doc.then(resolucao => {
  return resolucao.text();
}).then((body) => {
  const conteudo = document.querySelector('.conteudo');
const style = document.createElement('style');
style.innerHTML = body;
console.log(style);

conteudo.innerText = body;
})