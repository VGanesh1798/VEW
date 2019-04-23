import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './Pages/root';
import Home from './Pages/home';
import Artist from './Pages/artist';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route exact path={"/"} render={props => <Home {...props} />} />
          <Route path="/artist" render={props => <Artist {...props} />} />
        </Root>
      </BrowserRouter>
    );
  }
}

