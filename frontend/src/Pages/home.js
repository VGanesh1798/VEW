import React from 'react';
import { Container, Header } from "semantic-ui-react";

import "../CSS/home.css";

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Container className="welcome">
                    <Header as="h1">Welcome USER</Header>
                </Container>
                <Container className="welcome2">
                    <Header as="h4">Welcome to Smartify, the smarter
                                    music database! This database allows you
                                    to search for artists, relases, songs, playlists,
                                    and even labels with a variety of filters ranging
                                    from genre to hometown to birth year. After finding 
                                    a song, you can add it to a user created playlist.
                    </Header>
                </Container>
            </Container>
        );
    }
}
