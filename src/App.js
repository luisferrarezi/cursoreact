import React, { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import FormCadastro from "./components/FormCadastro";
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormCadastro/>
        <ListaNotas/>
      </section>
    );
  }
}

export default App;
