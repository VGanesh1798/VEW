import React from "react";
import { Container, Segment, Grid, Divider } from "semantic-ui-react";
import Title from "../Components/title";
import Search from "../Components/search";
import Footer from "../Components/footer";
import Admin from "../Components/admin";

export default class Root extends React.Component {

    state = { activeItem: "Search Artist"};

    render() {
        return (
            <Container style={{ width:"100%"}}>
            <Segment inverted>
                    <Title></Title>
                    <Divider></Divider>
                    <Grid columns={3} stackable fluid="true">
                        <Grid.Column>
                            <Search></Search>
                        </Grid.Column>
                        <Grid.Column>
                            <Container>{this.props.children}</Container>
                        </Grid.Column>
                        <Grid.Column>
                        <Admin></Admin>
                        </Grid.Column>
                    </Grid>
                    <Divider></Divider>
                    <Footer style={{bottom:"0"}}></Footer>
            </Segment>
            </Container>
        );
    } 
}
