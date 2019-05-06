import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './Pages/root';
import Login from './Pages/login';
import Home from './Pages/home';
import Artist from './Pages/artist';
import Label from './Pages/label';
import Release from './Pages/release';
import ArtistSearch from './Pages/Search/artist';
import LabelSearch from './Pages/Search/label';
import ReleaseSearch from './Pages/Search/release';
import UserOptions from './Pages/Options/user';
import ArtistOptions from './Pages/Options/artist';
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
          <Route path="/label" render={props => <Label {...props} />} />
          <Route path="/release" render={props => <Release {...props} />} />
          <Route path="/search/artist" render={props => <ArtistSearch {...props} />} />
          <Route path="/search/label" render={props => <LabelSearch {...props} />} />
          <Route path="/search/release" render={props => <ReleaseSearch {...props} />} />
          <Route path="/options/user" render={props => <UserOptions {...props} />} />
          <Route path="/options/artist" render={props => <ArtistOptions {...props} />} />
        </Root>
      </BrowserRouter>
    );
  }
}

