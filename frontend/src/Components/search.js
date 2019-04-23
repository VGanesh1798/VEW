import React from "react";
import { Container, Button } from "semantic-ui-react";

import "../CSS/search.css";

export default class Search extends React.Component {
    render() {
        return (
            <Container className="nav">
                <Button>Search Artists</Button>
                <Button>Search Releases</Button>
                <Button>Search Songs</Button>
                <Button>Search Labels</Button>
                <Button>Search Playlists</Button>
            </Container>                
        );
    }
}