import React from "react";
import { Container } from "semantic-ui-react";
import Title from "../Components/title";
import Search from "../Components/search";

import "../CSS/root.css";

export default class Root extends React.Component {
    render() {
        return (
            <Container className="root">
                <Title></Title>
                <Container className="content">
                    <Search></Search>
                    <Container className="page">{this.props.children}</Container>
                </Container>
            </Container>
        );
    } 
}
