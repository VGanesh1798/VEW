import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './Pages/root';
import Login from './Pages/login';
import Home from './Pages/home';
import Rate from './Pages/rate';
import Add from './Pages/add';
import Artist from './Pages/artist';
import Label from './Pages/label';
import Release from './Pages/release';
import Song from './Pages/song';
import Playlist from './Pages/playlist';
import ArtistSearch from './Pages/Search/artist';
import LabelSearch from './Pages/Search/label';
import ReleaseSearch from './Pages/Search/release';
import SongSearch from './Pages/Search/song';
import PlaylistSearch from './Pages/Search/playlist';
import UserOptions from './Pages/Options/user';
import ArtistOptions from './Pages/Options/artist';
import ReleaseOptions from './Pages/Options/release';
import SongOptions from './Pages/Options/song';
import LabelOptions from './Pages/Options/label';
import PlaylistOptions from './Pages/Options/playlist';
import Create from './Pages/create';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter> 
        <Root>
          <Route exact path={"/"} render={props => <Login {...props} />} />
          <Route path="/create" render={props => <Create {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          <Route path="/rate" render={props => <Rate {...props} />} />
          <Route path="/add" render={props => <Add {...props} /> } />
          <Route path="/artist" render={props => <Artist {...props} />} />
          <Route path="/label" render={props => <Label {...props} />} />
          <Route path="/release" render={props => <Release {...props} />} />
          <Route path="/song" render={props => <Song {...props} />} />
          <Route path="/playlist" render={props => <Playlist {...props} />} />
          <Route path="/search/artist" render={props => <ArtistSearch {...props} />} />
          <Route path="/search/label" render={props => <LabelSearch {...props} />} />
          <Route path="/search/release" render={props => <ReleaseSearch {...props} />} />
          <Route path="/search/song" render={props => <SongSearch {...props} />} />
          <Route path="/search/playlist" render={props => <PlaylistSearch {...props} />} />
          <Route path="/options/user" render={props => <UserOptions {...props} />} />
          <Route path="/options/artist" render={props => <ArtistOptions {...props} />} />
          <Route path="/options/release" render={props => <ReleaseOptions {...props} />} />
          <Route path="/options/song" render={props => <SongOptions {...props} />} />
          <Route path="/options/label" render={props => <LabelOptions {...props} />} />
          <Route path="/options/playlist" render={props => <PlaylistOptions {...props} />} />
        </Root>
      </BrowserRouter>
    );
  }
}

