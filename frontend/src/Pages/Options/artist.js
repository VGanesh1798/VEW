import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default class ArtistOptions extends React.Component {
    render() {
        return (
            <Segment inverted>
                <Header as="h3">Artist Options</Header>
            </Segment>
        );
    }
}