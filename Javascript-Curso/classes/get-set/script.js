const button = {
   get tamanho() {
    return this._numero || 100;
   },
   set tamanho(numero) {
    this._numero = numero * 200;
   }
}