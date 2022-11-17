import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import FormCadastro from "./components/FormCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super()    
    this.state = {notas:[],
                  categorias:[]};
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const arrayNovasNotas = [...this.state.notas, novaNota];
    const newState = {notas:arrayNovasNotas};
    this.setState(newState);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCat = [...this.state.categorias, nomeCategoria];
    const newState = {...this.state, categorias:novoArrayCat};
    this.setState(newState);
  }

  render(){
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)}/>
          <ListaNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>          
        </main>
      </section>
    );
  }
}

export default App;
