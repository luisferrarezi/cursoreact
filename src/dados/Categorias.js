export default class Categorias{
  constructor(){
    this.categorias = [];
    this._listaCategorias = [];
  }

  adicionaLista(func){
    this._listaCategorias.push(func);
  }

  retiraLista(func){
    this._listaCategorias = this._listaCategorias.filter(f => f !== func);
  }  

  notificar(){
    this._listaCategorias.forEach(func => func(this.categorias));
  }

  adicionarCategoria(novaCategoria){
    this.categorias.push(novaCategoria);
    this.notificar(this.categorias);
  }
}
