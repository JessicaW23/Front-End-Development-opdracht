import React from "react";
import "./App.css";
//const { render } = require("@testing-library/react");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    //api call
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((resp) => this.setState({ posts: resp }));
  }
  render() {
    return (
      <ul class="App-grid">
       
        {this.state.posts.map((post) => (
          <li key={post.id}>
            {post.id}
            <p>Name:{post.name} . Gender:{post.gender} . House:{post.house}</p>
          </li>
        ))}
      </ul>
    );
  }
}
