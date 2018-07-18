import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';

const API_KEY = "b7fa7256effbb17b855b88a70ee41b57";

class App extends Component {
  state = {
    recipes = []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    let api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken#`);

    const data = await api_call.json();
    console.log(data.recipes[0].recipe_id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">James' Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;