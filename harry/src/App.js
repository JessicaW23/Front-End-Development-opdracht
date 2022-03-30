import React from "react";
import "./App.css";
//const { render } = require("@testing-library/react");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: [] };
  }

  houseFilter = house => () => {
    console.log(house);
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ character: resp }));
  }

  filterCharacter = value => () => {
    var filteredCharacters;
    var character = this.state.character;

    

    this.setState({ character: filteredCharacters });
  }
 

  componentDidMount() {
    //api call
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ character: resp }));
  }
  render() {
    return (
      <ul class="App-grid">
       
        {this.state.character.map((character) => (
          <li key={character.id}>
            {character.id}
            <p>Name:{character.name}</p>
            <p>Gender:{character.gender}</p>
            <p><span onClick={this.houseFilter(character.house)}>House:{character.house}</span></p>
          </li>
        ))}
      </li>
    );
  }
}
// render() {
//  return (
//    <ul class="App-grid">
//     
//      {this.state.character.map((character) => (
//        <li key={character.id}>
//          {character.id}
//          <p>Name:{character.name} - {character.alternate_names}</p>
//          <p>Birth date:{character.dateOfBirth}</p>
//          <p>Species:{character.species}</p>
//          <p>Gender:{character.gender}</p>
//          <p>Ancestry:{character.ancestry}</p>
//          <p>Eye colour:{character.eyeColour}</p>
//          <p>Hair colour:{character.hairColour}</p>
//          <p>Wand:{character.wand.wood} - {character.wand.core} - {character.wand.length}</p>
//          <p>Patronus:{character.patronus}</p>
//          <p>{character.Image}</p>
//        </li>
//      ))}
//    </ul>
//  );
// }