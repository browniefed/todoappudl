import React, { Component } from 'react';
import { Link } from "react-router";

import Item from "./item";

class App extends Component {
  render() {
    return (
      <div >
        <div>
          <Link to="/todos">Todos</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
