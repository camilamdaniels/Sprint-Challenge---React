import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <table className="Table">
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Eye Color</th>
            <th>Gender</th>
            <th>Hair Color</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Skin Color</th>
          </tr>
            {this.state.starwarsChars.map((char) => {
              return (
                <tr>
                  <td>{char.name}</td>
                  <td>{char.birth_year}</td>
                  <td>{char.created}</td>
                  <td>{char.edited}</td>
                  <td>{char.eye_color}</td>
                  <td>{char.gender}</td>
                  <td>{char.hair_color}</td>
                  <td>{char.height}</td>
                  <td>{char.mass}</td>
                  <td>{char.skin_color}</td>
                </tr>
              )
            })}
        </table>
      </div>
    );
  }
}

export default App;
