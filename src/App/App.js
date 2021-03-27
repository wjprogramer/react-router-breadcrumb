import React, { Component } from 'react';
import { Navbar } from '../components';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
