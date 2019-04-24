import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './Pages/root';
import Login from './Pages/login';
import Home from './Pages/home';
import Artist from './Pages/artist';
import Create from './Pages/create';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <Root>
          <Route exact path={"/"} render={props => <Login {...props} />} />
          <Route path="/create" render={props => <Create {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          <Route path="/artist" render={props => <Artist {...props} />} />
        </Root>
      </BrowserRouter>
    );
  }
}

