import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Books, Electronics } from "../pages";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      </div>
    );
  }
}

export default App;
