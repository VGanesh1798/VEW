import React from "react";
import { Container, Button } from "semantic-ui-react";

import "../CSS/search.css";

export default class Search extends React.Component {
    render() {
        return (
            <Container className="side">
                <Container className="nav">
                <Button className="navbut">Search Artists</Button>
                <Button className="navbut">Search Releases</Button>
                <Button className="navbut">Search Songs</Button>
                <Button className="navbut">Search Labels</Button>
                <Button className="navbut">Search Playlists</Button>
                </Container> 
                <Container className="bottom">
                    USER
                </Container>
            </Container>

        );
    }
}