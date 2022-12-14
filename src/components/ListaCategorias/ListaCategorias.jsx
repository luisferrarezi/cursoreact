import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component{
  constructor(){
    super();
    this.state = {categorias:[]};
    this._novaCategoria = this._novaCategoria.bind(this);    
  }

  componentDidMount(){
    this.props.categorias.adicionaLista(this._novaCategoria);
  }

  componentWillUnmont(){
    this.props.categorias.retiraLista(this._novaCategoria);
  }    

  _novaCategoria(categorias){
    this.setState({...this.state, categorias});
  }

  _handleEventoInput(e){
    if(e.keyCode === 13){
      const valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render(){
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index)=>{
            return <li key={index} className="lista-categorias_item">{categoria}</li>;
          })}
        </ul>
        <input type="text" className="lista-categorias-input" placeholder="Adicionar categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    );
  }
}

export default ListaCategorias;
