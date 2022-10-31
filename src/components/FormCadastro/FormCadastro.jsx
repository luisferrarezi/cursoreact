import React, { Component } from "react";
import "./estilo.css";

class FormCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handlerMudancaTitulo(event){
    this.titulo = event.target.value;
  }

  _handlerMudancaTexto(event){
    this.texto = event.target.value;
  }  

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);    
  }

  render() {
    return (
      <form className="form-cadastro" 
            onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaTexto.bind(this)}          
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormCadastro;
