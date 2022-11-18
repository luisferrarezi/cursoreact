export default class ArrayNotas{
  constructor(){
    this.notas = [];
    this._listaNotas = [];
  }

  adicionaLista(func){
    this._listaNotas.push(func);
  }

  retiraLista(func){
    this._listaNotas = this._listaNotas.filter(f => f !== func);
  }

  notificar(){
    this._listaNotas.forEach(func => func(this.notas));
  }  

  adicionarNota(titulo, texto, categoria){
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar(this.notas);
  }

  deletarNota(index){    
    this.notas.splice(index,1);
    this.notificar(this.notas);
  }   
}

class Nota{
  constructor(titulo, texto, categoria){
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
