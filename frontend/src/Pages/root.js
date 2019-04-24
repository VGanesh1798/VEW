import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Title from "../Components/title";
import Search from "../Components/search";

export default class Root extends React.Component {

    state = { activeItem: "Search Artist"};

    render() {
        return (
            <Container textAlign="center" style={{marginTop: "1em"}}>
                <Title></Title>
                <Grid columns={2} divided stackable fluid>
                    <Grid.Column floated="left" width={4}>
                        <Search></Search>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Container>{this.props.children}</Container>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    } 
}
