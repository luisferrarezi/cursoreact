import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import FormCadastro from "./components/FormCadastro";
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super()    
    this.state = {notas:[]};
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const arrayNovasNotas = [...this.state.notas, novaNota];
    const newState = {notas:arrayNovasNotas};
    this.setState(newState);
  }

  render(){
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
