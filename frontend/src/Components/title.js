import React from "react";
import { Container, Header } from "semantic-ui-react";

import "../CSS/title.css";

export default class Title extends React.Component {
    render() {
        return (
            <Container className="title">
                <Container className="box">
                    <Header as="h1">VEW Music Database</Header>
                </Container>
            </Container>
        );
    }
}