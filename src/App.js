import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Recipes from './Components/Recipes'

const API_KEY = "b7fa7256effbb17b855b88a70ee41b57";

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    let api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
    componentWillMount = () => {
      const json = localStorage.getItem('recipes');
      const recipes = JSON.parse(json);
      this.setState({ recipes }); 
    }
    componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem('recipes', recipes);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">James' Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;