import React from "react";
import "./App.css";
//const { render } = require("@testing-library/react");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] };
  }

  componentDidMount() {
    //api call
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ characters: resp }));
  }
  render() {
    return (
      <li className="App-grid">
        {this.state.characters.map((post) => (
          <li key={post.id}>
            {post.id}
            <a>
              <p className="name">Name:{post.name}</p>{" "}
              <p className="gender">Gender:{post.gender}</p>
              <p className="house">House:{post.house}</p>
            </a>
          </li>
        ))}
      </li>
    );
  }
}
