import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './Pages/root';
import Home from './Pages/home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route exact path={"/"} render={props => <Home {...props} />} />
        </Root>
      </BrowserRouter>
    );
  }
}

