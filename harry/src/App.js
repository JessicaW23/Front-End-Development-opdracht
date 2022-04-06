import React from "react";
import "./App.css";
import Passport from "./Passport";
//const { render } = require("@testing-library/react");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: [] };
  }

  houseFilter = (house) => () => {
    console.log(house);
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ character: resp }));
  };

  filterCharacter = (value) => () => {
    var filteredCharacters;
    var character = this.state.character;
    this.setState({ character: filteredCharacters });
  };

  componentDidMount() {
    //api call
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ character: resp }));
  }

  render() {
    return (
      <ul className="App-grid">
        {this.state.character.map((character) => (
          <button className="paspoortbutton">
            {character.id}
            <img className="fotovoorkant" src={character.image}></img>
            <p className="naamvoorkant">{character.name}</p>

            <p className="Filterhouse">
              <span onClick={this.houseFilter(character.house)}>
                Filter by House: {character.house}
              </span>
            </p>
            <Passport character={character} />
          </button>
        ))}
      </ul>
    );
  }
}
