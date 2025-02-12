// const Dom = {
//   seletor: 'li',
//   element() {
// return elementoSelecionado = document.querySelector(this.seletor);
//   },
//   ativar() {
// this.element().classList.add('ativar');

//   }
// }

// Dom.ativar();
// Dom.seletor = 'ul';
// Dom.ativar();

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
const ul = new Dom('ul');
