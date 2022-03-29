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
      <ul>
        <h1 align="center">React App</h1>
        {this.state.posts.map((post) => (
          <li key={post.id}>
            {post.id}
            {post.name}.{post.gender}.{post.house}
          </li>
        ))}
      </ul>
    );
  }
}
