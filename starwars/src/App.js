import React, { Component } from 'react';
import './App.css';
import StarWarList from './StarWarList'
import Navbar from './components/Nav//Navbar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.dev/api/people');
  }

  getCharacters = URL => {
    
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Navbar />
        <StarWarList starwarsChars={this.state.starwarsChars} />
         
        
      </div>
    );
  }
}



export default App;