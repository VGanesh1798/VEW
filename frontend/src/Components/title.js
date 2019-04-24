import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default class Title extends React.Component {
    render() {
        return (
            <Segment inverted color="violet">
                <Header as="h1" textAlign="center">VEW Music Database</Header>
            </Segment>
        );
    }
}