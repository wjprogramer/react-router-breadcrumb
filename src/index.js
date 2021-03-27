import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './App';

const rootPath = process.env.PUBLIC_URL;

ReactDOM.render(
  <BrowserRouter basename={rootPath}>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
