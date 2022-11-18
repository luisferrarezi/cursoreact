import React, { Component } from "react";
import "./assets/app.css";
import './assets/index.css';
import ListaNotas from "./components/ListaNotas";
import FormCadastro from "./components/FormCadastro";
import ListaCategorias from "./components/ListaCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render(){
    return (
      <section className="conteudo">
        <FormCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}/>
          <ListaNotas apagarNota={this.notas.deletarNota.bind(this.notas)} notas={this.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
